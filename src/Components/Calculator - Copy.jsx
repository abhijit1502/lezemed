import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConfig from './ApiConfig';
import countryIdPageMapping from './CountryIdMap.json';
function Calculator() {
  const [countries, setCountries] = useState([]);
  var pageid = countryIdPageMapping[window.location.pathname.replaceAll("/", "")];
  if (pageid === undefined) {
    pageid = '3';
  }
  const [selectedCountry, setSelectedCountry] = useState(pageid); // Default selected country ID
  const [selectedBranchId, setSelectedBranchId] = useState('2');
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('00'); // Set default to "00"
  const [currencyCode, setCurrencyCode] = useState('');
  const [fees, setFees] = useState('00'); // Set default to "00"
  const [calculatedAmount, setCalculatedAmount] = useState('');
  const [collectionTypes, setCollectionTypes] = useState([]);
  const [selectedCollectionType, setSelectedCollectionType] = useState('');
  const [selectedCollectionTypeName, setSelectedCollectionTypeName] = useState('');
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [selectedDeliveryType, setSelectedDeliveryType] = useState('');
  const [selectBasecountryId, setselectBasecountryId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = '../ApiConfig.js'
  const location = useLocation();
  const amountTimeoutRef = useRef(null);
  const baseCountryFlags = {
    1: 'assets/img/flags/gbp.png',
    6: 'assets/img/flags/eur.png',
    17: 'assets/img/flags/cad.png',
  };
  const [baseCountryFlag, setBaseCountryFlag] = useState(baseCountryFlags['1']);

  // Parse URL to set the selected country

  useEffect(() => {
    const pathParts = location.pathname.split('_');
    if (pathParts.length > 1) {
      const countryFromURL = pathParts[1];
      const matchedCountry = countries.find(country => country.countryName.toLowerCase() === countryFromURL.toLowerCase());
      if (matchedCountry) {
        setSelectedCountry(matchedCountry.countryID.toString());
        setSelectedCountryDetails(matchedCountry);
        setCurrencyCode(matchedCountry.countryCurrency);
      }
    }
  }, [location.pathname, countries]);

  // Fetch countries on component mount
  useEffect(() => {
    axios.post(`${ApiConfig.baseUrl}/checkrateslistcountry/checklistcountry`, { 
clientID: '1' })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setCountries(response.data.data);
          const defaultCountryDetails = response.data.data.find(
            (country) => country.countryID === parseInt(selectedCountry, 10)
          );
          setSelectedCountryDetails(defaultCountryDetails);
        }
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedBranchId) {
      axios.post(`${ApiConfig.baseUrl}/currency/currencylist`, { countryID: selectedCountry, clientID: '1' })
        .then((response) => {
          if (response.data.response && response.data.data) {
            setCurrencyList(response.data.data);
            const firstCurrency = response.data.data[0];
            if (firstCurrency) {
              setCurrencyCode(firstCurrency.currencyCode);
            }
          }
        })
        .catch((error) => console.error('Error fetching currency list:', error));
    }
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    axios.post(`${ApiConfig.baseUrl}/collection/getcollectiontype`, {
      clientID: '1',
      branchID: selectedBranchId,
      countryID: selectedCountry,
    })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setCollectionTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setSelectedCollectionType(defaultCollectionType.paymentCollectionTypeID.toString());
            setSelectedCollectionTypeName(defaultCollectionType.typeName);
          }
        }
      })
      .catch((error) => console.error('Error fetching collection types:', error));
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    axios.post(`${ApiConfig.baseUrl}/deliverytype/getdeliverytype`, {
      clientID: '1',
      branchID: selectedBranchId,
      countryID: selectedCountry,
    })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setDeliveryTypes(response.data.data);
          const defaultDeliveryType = response.data.data[0];
          if (defaultDeliveryType) {
            setSelectedDeliveryType(defaultDeliveryType.deliveryTypeID.toString());
          }
        }
      })
      .catch((error) => console.error('Error fetching delivery types:', error));
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    if (amount && selectedCountry && currencyCode) {
      if (amountTimeoutRef.current) {
        clearTimeout(amountTimeoutRef.current);
      }
      setIsLoading(true);
      amountTimeoutRef.current = setTimeout(() => {
        axios.post(`${ApiConfig.baseUrl}/checkrateslistcountry/checkrateslistcountry`, {
          clientID: '1',
          countryID: selectedCountry,
          paymentTypeID: "2",
          paymentDepositTypeID: selectedCollectionType,
          deliveryTypeID: selectedDeliveryType,
          transferAmount: amount,
          currencyCode: currencyCode,
          branchID: selectedBranchId,
          BaseCurrencyID: ApiConfig.primaryCurrencyID || "1"
        })
          .then((response) => {
            if (response.data.response && response.data.data && response.data.data.length > 0) {
              let foundRate = false;
              response.data.data.forEach(rateData => {
                const rateValue = rateData.rate;
                const minAmount = rateData.minAmount;
                const maxAmount = rateData.maxAmount;
                if (rateValue !== 0 && amount >= minAmount && amount <= maxAmount) {
                  setRate(rateValue);
                  setFees(rateData.transferFeesGBP);
                  setCalculatedAmount((amount * rateValue).toFixed(2) || '');
                  foundRate = true;
                }
              });
              if (!foundRate) {
                toast.error("Rates And Fees Are Not Available For This Country");
                setAmount('0');
                setCalculatedAmount('0');
              }
            } else {
              toast.error("Rates And Fees Are Not Available For This Country");
              setAmount('0');
              setCalculatedAmount('0');
            }
          })
          .catch((error) => console.error('Error fetching rates and fees:', error))
          .finally(() => setIsLoading(false));
      }, 1000);
    }
  }, [amount, selectedCountry, currencyCode, selectedCollectionType, selectedDeliveryType, selectedBranchId, selectBasecountryId]);


  const handleCountryChange = (event) => {
    const newCountryId = event.target.value;
    setSelectedCountry(newCountryId);
    const newCountryDetails = countries.find(country => country.countryID.toString() === newCountryId);
    setSelectedCountryDetails(newCountryDetails);
    if (newCountryDetails) {
      setCurrencyCode(newCountryDetails.countryCurrency);
    }
  };

  const handleAmountChange = (event) => {
    let newAmount = event.target.value.replace(/[^\d.]/g, '').replace(/^(\d*\.?)|(\d*)\.?/g, '$1$2');
    if (newAmount.length > 12) {
      newAmount = newAmount.substring(0, 12);
    }
    setAmount(newAmount);
    setCalculatedAmount((newAmount * rate).toFixed(2) || '');
  };

  const handleCalculatedAmountChange = (event) => {
    let newCalculatedAmount = event.target.value.replace(/[^\d.]/g, '').replace(/^(\d*\.?)|(\d*)\.?/g, '$1$2');
    if (newCalculatedAmount.length > 12) {
      newCalculatedAmount = newCalculatedAmount.substring(0, 12);
    }
    setCalculatedAmount(newCalculatedAmount);
    setAmount((newCalculatedAmount / rate).toFixed(2) || '');
  };

  const handleAmountFocus = (event) => {
    event.target.value = event.target.value.replace(/,/g, '');
  };

  const handleAmountBlur = (event) => {
    event.target.value = parseFloat(event.target.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleContinue = (event) => {
    event.preventDefault();
    // Calculate result in the current component without navigation
    if (!selectedCollectionType || !selectedDeliveryType || !amount) {
      toast.error("Please Fill All The Details.");
      return;
    }
    toast.success('Amount Calculated Successfully!');
  };

  return (
    <div>
      <div className="cal_css">
        <div className="service-charge-wrap">
          <form className="charge-form">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="send_money">Sending to?</label>
                  <select className="myselect" value={selectedCountry} onChange={handleCountryChange}>
                    {countries
                      // .filter(country => [2, 3, 5, 164].includes(country.countryID))
                      .map(country => (
                        <option key={country.countryID} value={country.countryID}>
                          {country.countryName}
                        </option>
                      ))}
                  </select>
                  <img className="flagicon ddlcurrency_flag" src={selectedCountryDetails?.flag || selectedCountryDetails?.countryFlag} alt="Currency Flags" />
                  <span className="inputgbp">{currencyCode}</span>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="send_money">When you send GBP</label>
                  <input
                    type="text"
                    id="Number1"
                    name="send_money"
                    value={amount}
                    onChange={handleAmountChange}
                    onFocus={handleAmountFocus}
                    onBlur={handleAmountBlur}
                    maxLength={12} // Limiting input to 12 characters
                    placeholder='000'
                  />
                  <img className="baseflag" src={baseCountryFlag} alt="GBP flag" />
                  <span className="inputgbp">GBP</span>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <ul className="amount-currency-info">
                  <li className="d-flex justify-content-between align-items-center">
                    <div className="info-icon">
                      <i className="ri-pause-line" />
                      <strong id="txtTransferFee" className="txtTransferFee">£{`${fees}`}</strong>
                    </div>
                    <div className="info-right">
                      <span className='text-white'>Transfer Fee</span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div className="info-icon">
                      <i className="ri-close-fill" />
                      <strong className="txtExchangeRates">{rate} {currencyCode}</strong>
                    </div>
                    <div className="info-right">
                      <span className='text-white'>Guaranted Rate</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="send_money">Recipient gets</label>
                  <input className="form-control"
                    type="text"
                    id="Number2"
                    name="received_money"
                    value={calculatedAmount}
                    onChange={handleCalculatedAmountChange}
                    onFocus={handleAmountFocus}
                    onBlur={handleAmountBlur}
                    maxLength={12} // Limiting input to 12 characters
                    placeholder='000'
                  />
                  <img className="flagicon baseflag mt-0" src={selectedCountryDetails?.flag || selectedCountryDetails?.countryFlag} />
                  <select className="inputgbp">
                    <option>{currencyCode}</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 text-center mb-2">
                <p id="updatedate">Rates last updated on 18/09/2024 10:32 AM</p>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group form-btn">
                  <a href="#" className="default-btn w-100 d-block" disabled={isLoading}>Continue </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Calculator
