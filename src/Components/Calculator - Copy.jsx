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
  const [selectedCountry, setSelectedCountry] = useState(pageid);
  const [selectedBranchId, setSelectedBranchId] = useState('2');
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState('100.00');
  const [rate, setRate] = useState('');
  const [currencyCode, setCurrencyCode] = useState('');
  const [fees, setFees] = useState('00');
  const [calculatedAmount, setCalculatedAmount] = useState('');
  const [collectionTypes, setCollectionTypes] = useState([]);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [selectedCollectionType, setSelectedCollectionType] = useState('');
  const [selectedCollectionTypeName, setSelectedCollectionTypeName] = useState('');
  const [selectedPaymentType, setSelectedPaymentType] = useState('');
  const [payementtypeId, setpaymenttypeId] = useState('');
  const [countryId, setcountryId] = useState('');
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [BasecurrencyData, setBasecurencydata] = useState([]);
  const [BasecurrencyId, setbasecurrencyId] = useState('');
  const [selectedDeliveryType, setSelectedDeliveryType] = useState('');
  const [selectBasecountryId, setselectBasecountryId] = useState('');
  const [youSendInput, setyouSendInput] = useState(false);
  const [RecipentGetInput, setRecipentGetInput] = useState(false);
  const [userEnteredAmount, setUserEnteredAmount] = useState(amount);
  const [minimumFractionDigits, setMinimumFractionDigits] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = '../ApiConfig.js';
  const location = useLocation();
  const amountTimeoutRef = useRef(null);

  const baseCountryFlags = {
    1: 'assets/img/flags/gbp.png',
    6: 'assets/img/flags/eur.png',
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

  useEffect(() => {
    axios.post(`${ApiConfig.baseUrl}/checkrateslistcountry/basecurrencylist`, {
      clientID: '1',
      branchID: selectedBranchId,
    })
      .then((response) => {
        if (response?.data?.response && response?.data?.data) {
          setBasecurencydata(response.data.data);
          const defaultCollectionType = response?.data?.data[0];
          if (defaultCollectionType) {
            setbasecurrencyId(defaultCollectionType?.baseCurrencyID.toString());
            setcountryId(defaultCollectionType?.countryID.toString());
          }
        }
      })
      .catch((error) => console.error('Error fetching payment types:', error));
  }, [selectedBranchId]);

  // Fetch countries on component mount
  useEffect(() => {
    axios.post(`${ApiConfig.baseUrl}/checkrateslistcountry/checklistcountry`, {
      clientID: '1'
    })
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
    axios.post(`${ApiConfig.baseUrl}/paymenttype/getpaytypes`, {
      clientID: '1',
      branchID: selectedBranchId,
      customerID: "",
      baseCountryID: countryId,
      isApp: "0"
    })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setPaymentTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setpaymenttypeId(defaultCollectionType.payTypeID.toString());
            setSelectedPaymentType(defaultCollectionType.payType);
          }
        }
      })
      .catch((error) => console.error('Error fetching payment types:', error));
  }, [selectedBranchId, countryId]);

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
          paymentTypeID: payementtypeId,
          paymentDepositTypeID: selectedCollectionType,
          deliveryTypeID: selectedDeliveryType,
          transferAmount: amount,
          currencyCode: currencyCode,
          branchID: selectedBranchId,
          BaseCurrencyID: BasecurrencyId
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
                setRate('0');
                setAmount('0');
                setCalculatedAmount('0');
              }
            } else {
              toast.error("Rates And Fees Are Not Available For This Country");
              setRate('0');
              setAmount('0');
              setCalculatedAmount('0');
            }
          })
          .catch((error) => console.error('Error fetching rates and fees:', error))
          .finally(() => setIsLoading(false));
      }, 1000);
    }
  }, [amount, selectedCountry, currencyCode, selectedCollectionType, BasecurrencyId, payementtypeId, selectedDeliveryType, selectedBranchId, selectBasecountryId]);

  const handleBasecountryIdChange = (event) => {
    const newBasecountryId = event.target.value;
    setselectBasecountryId(newBasecountryId);
    setBaseCountryFlag(baseCountryFlags[newBasecountryId]);
  };

  const handleDeliveryTypeChange = (event) => {
    event.preventDefault();
    const selectedDeliveryType = event.target.value;
    setSelectedDeliveryType(selectedDeliveryType);
  };

  const handleCollectionTypeChange = (event) => {
    event.preventDefault();
    const selectedCollectionType = event.target.value;
    setSelectedCollectionType(selectedCollectionType);
  };

  const handlePayementTypeChange = (event) => {
    event.preventDefault();
    const selectedPaymentType = event.target.value;
    setpaymenttypeId(selectedPaymentType);
  };


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
    event.preventDefault();
    const newAmount = event.target.value;
    setyouSendInput(true);

    // Remove leading zeros
    let cleanedAmount = newAmount.replace(/^0+/, '');

    // Allow typing with .00 or without it
    if (cleanedAmount.endsWith('.00')) {
        cleanedAmount = cleanedAmount.slice(0, -3); // Remove the .00 for valid input
    }

    // Check if the cleaned amount is a valid number
    if (!isNaN(cleanedAmount)) {
        // Limit the input to 12 digits
        if (cleanedAmount.length <= 12) {
            setAmount(cleanedAmount);
            setUserEnteredAmount(cleanedAmount);
        } else {
            // Allow input after 12 digits
            setAmount(cleanedAmount.substring(0, 12)); // Limit to 12 digits
            setUserEnteredAmount(cleanedAmount.substring(0, 12));
        }
    } else {
        // Handle non-numeric input
        setAmount('0');
        setUserEnteredAmount('0');
        // setRate('0');
        // setFees('0');
        setCalculatedAmount('0');
    }
};

  const handleCalculatedAmountChange = (event) => {
    event.preventDefault();
    let newCalculatedAmount = event.target.value;
    setRecipentGetInput(true);
    // Remove any non-numeric characters from the input
    newCalculatedAmount = newCalculatedAmount.replace(/[^0-9.]/g, '');

    // Ensure the input does not exceed 7 digits
    if (newCalculatedAmount.length > 12) {
      newCalculatedAmount = newCalculatedAmount.slice(0, 0);
    }

    // Update the state with the cleaned amount
    setCalculatedAmount(newCalculatedAmount);
    setUserEnteredAmount(newCalculatedAmount / rate || '');
    setAmount(newCalculatedAmount / rate || '');
  };


  const handleAmountBlur = (event) => {
    let value = event.target.value;
  
    // Remove any non-numeric characters (except for decimal points)
    value = value.replace(/[^0-9.]/g, '');
  
    // Check if the value is a valid number
    if (!isNaN(value) && value !== '') {
      // Convert to float
      const numericValue = parseFloat(value);
  
      // Only format if the value is greater than 0
      if (numericValue > 0) {
        const formattedValue = numericValue.toFixed(2);
        setAmount(formattedValue); // Update the state
        setUserEnteredAmount(formattedValue); // Update user entered amount
        event.target.value = formattedValue; // Ensure input reflects formatted value
      } else {
        // If the value is 0 or empty, reset to an empty string
        setAmount('0');
        setUserEnteredAmount('0');
        event.target.value = '0';
      }
    } else {
      // If not a valid number, reset to an empty string
      setAmount('0');
      setUserEnteredAmount('0');
      event.target.value = '0';
    }
  };
  
    const handleInputFocusOut = () => {
      setMinimumFractionDigits(2);
    };
  
    const handleInputFocus = () => {
      // Set minimumFractionDigits to 0 when focus is in
      setMinimumFractionDigits(0);
    };

  const handleContinue = (event) => {
    event.preventDefault();
    if (!selectedCollectionType || !selectedDeliveryType || !amount) {
      toast.error("Please Fill All The Details.");
      return;
    }
    toast.success('Amount Calculated Successfully!');
    // Open the link in a new tab
    window.open('https://eremitly.com/app/app-login.html', '_blank');
  };

  return (
    <>
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
                    value={amount === '' ? '0' : amount}
                    onChange={handleAmountChange}
                    //onBlur={handleInputBlur} // Call the blur handler here
                    onBlur={handleAmountBlur}
                    disabled={rate === 0 ? true : false}
                    maxLength={12} // Limiting input to 12 characters
                    placeholder='0.00'
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
                      <span className=''>Transfer Fee</span>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div className="info-icon">
                      <i className="ri-close-fill" />
                      <strong className="txtExchangeRates">{rate} {currencyCode}</strong>
                    </div>
                    <div className="info-right">
                      <span className=''>Guaranted Rate</span>
                    </div>
                  </li>
                </ul>
              </div>
              <select
                label="Collection Type "
                value={selectedCollectionType}
                onChange={handleCollectionTypeChange}
                className="select-delivery d-none"
              >
                {collectionTypes.map((collectionType) => (
                  <option key={collectionType.paymentCollectionTypeID} value={collectionType.paymentCollectionTypeID}>
                    {collectionType.typeName}
                  </option>
                ))}
              </select>

              <select
                label="Payment Type"
                value={payementtypeId}
                onChange={handlePayementTypeChange}
                className="select-delivery d-none"
              >
                {paymentTypes.map((paymentTypes) => (
                  <option key={paymentTypes.paymentCollectionTypeID} value={paymentTypes.payTypeID}>
                    {paymentTypes?.payType}
                  </option>
                ))}
              </select>

              <select
                label="Delevery Type "
                value={selectedDeliveryType}
                onChange={handleDeliveryTypeChange}
                className="select-delivery d-none"
              >
                {deliveryTypes.map((deliveryTypes) => (
                  <option key={deliveryTypes.deliveryTypeID} value={deliveryTypes.deliveryTypeID}>
                    {deliveryTypes?.deliveryType}
                  </option>
                ))}
              </select>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="send_money">Recipient gets</label>
                  <input className="form-control"
                    type="text"
                    id="Number2"
                    name="received_money"
                    value={calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} // Comma-separated format
                    onChange={handleCalculatedAmountChange}
                    onBlur={handleInputFocusOut}
                    onFocus={handleInputFocus}
                    disabled={rate === 0 ? true : false}
                    maxLength={12} // Limiting input to 12 characters
                    placeholder='0.00'
                  />
                  <img className="flagicon baseflag mt-0" src={selectedCountryDetails?.flag || selectedCountryDetails?.countryFlag} />
                  <select className="inputgbp">
                    <option>{currencyCode}</option>
                  </select>
                </div>
              </div>
              {/* <div className="col-lg-12 text-center mb-2">
                <p id="updatedate">Rates last updated on 18/09/2024 10:32 AM</p>
              </div> */}
              <div className="col-lg-12 col-md-12">
                <div className="form-group form-btn">
                  <a href="#" className="default-btn w-100 d-block" onClick={handleContinue}>Continue </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Calculator
