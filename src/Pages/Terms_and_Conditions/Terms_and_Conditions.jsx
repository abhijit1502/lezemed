import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Terms_and_Conditions_Seo from '../../SEO/Terms_and_Conditions_Seo';

function Terms_and_Conditions() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Preloader />
            ) : (
                <div>
                    <Terms_and_Conditions_Seo />
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Terms and Conditions</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>Terms and Conditions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="th-blog-wrapper blog-details space-top space-extra-bottom legal-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="th-blog">
                                        <div className="blog-content">
                                            <h4>
                                                <span>I.</span> General Provisions
                                            </h4>
                                            <p className='mb-2'>
                                                These Terms and Conditions govern the terms under which you may access and use our website ("the Website") and the services associated with it (together, the "Service"). By accessing, registering with, and using the Service, you agree to be bound by these Terms and Conditions.
                                            </p>
                                            <p>
                                                In these Terms and Conditions, "we," "us," and "our" refer to Salama Remit, while "you" and "your" refer to any person who accesses and/or uses the Service. Access to and use of the Service is conditional upon your acceptance of these Terms and Conditions.
                                                The language of these Terms and Conditions is English, and all Services, instructions, and transactions carried out in connection with it shall be conducted in English.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>II.</span> Definitions</h4>
                                            <p className='mb-2'>In this Terms and Conditions the terms below shall have the following definition(s): </p>
                                            <ul class="info-number-list">
                                                <li>
                                                    <span>A.</span> "Compliance Officer" means one or more members of staff at Salama Remit who are responsible for compliance with Money Transfer Regulations, anti-money laundering legislation, and other applicable laws.
                                                </li>
                                                <li>
                                                    <span>B.</span> "Fees" means the charges and fees we apply for the Service, as specified in the price list published on the Website and/or the Application, or as communicated to you before we issue a Confirmation, in accordance with these Terms and Conditions.
                                                </li>
                                                <li>
                                                    <span>C.</span>"Force Majeure Event" means any of the circumstances referred to in clause VII.G;
                                                </li>
                                                <li>
                                                    <span>D.</span> "FX Spread" means when you pay for a transaction in one currency, and it is paid out in another currency. We apply an FX spread, which is the difference between the exchange rate at which we buy the currency and the exchange rate we offer you. This spread is communicated in the order confirmation and covers our costs plus a small margin.
                                                </li>
                                                <li>
                                                    <span>E.</span> "Malicious Code" means computer viruses, Trojans, software locks, drop-dead devices, malicious logic, trap doors, worms, time bombs, corrupted files, or other computer program routines intended to delete, disable, deactivate, damage, interfere with, intercept, or expropriate any systems, data, personal information, or property of another.
                                                </li>
                                                <li>
                                                    <span>F.</span> "Money Transfer Regulations" means the applicable laws of the United Kingdom or any other relevant jurisdiction regulating electronic money transfer services, including but not limited to:
                                                    <ul class="info-number-list">
                                                        <li> <span>a.</span> The Financial Services and Markets Act 2000/2016</li>
                                                        <li> <span>b.</span> The Payment Services Regulations 2017, and</li>
                                                        <li> <span>c.</span> The Electronic Money Regulations 2011</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>G.</span> "Prohibited Purpose" means any unlawful purpose, whether in the country from which the funds are transferred, the recipient's country, or any jurisdiction with authority over the Sender or Receiver. This includes but is not limited to:
                                                    <ul class="info-number-list">
                                                        <li> <span>a.</span> The transfer or receipt of payments for illegal activities,</li>
                                                        <li> <span>b.</span> The transfer of funds that constitute proceeds of crime or money laundering under the Proceeds of Crime Act 2002</li>
                                                        <li> <span>c.</span> The use of funds obtained through illegal activity,</li>
                                                        <li> <span>d.</span> Funding illegal activity,</li>
                                                        <li> <span>e.</span> The transfer of funds to evade seizure by law enforcement authorities or court orders, and</li>
                                                        <li> <span>f.</span> The transfer of funds without the owner's permission.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>H.</span>"Recipient" means the person who receives the money through the Service.
                                                </li>
                                                <li>
                                                    <span>I.</span> "Reference Number" means the unique transaction number issued to you, which the recipient must provide to our partners to receive the transferred funds.
                                                </li>
                                                <li>
                                                    <span>J.</span> "Sender" means the person who initiates a money transfer through the Service.
                                                </li>
                                                <li>
                                                    <span>K.</span> "Transaction" means every money transfer you initiate using the Service and/or any other use of the Service you make.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>III.</span> Eligibility and access rights</h4>
                                            <ul class="info-number-list">
                                                <li>
                                                    <span>A.</span> By using the Service, you warrant that you are at least 18 years old and have the legal capacity to enter into legally binding contracts.
                                                </li>
                                                <li>
                                                    <span>B.</span> Without prejudice to your rights regarding any order for Services for which we have issued a Confirmation (in accordance with Clause V below), we reserve the right to terminate or suspend your access to the Service at any time, without prior notice, if:
                                                    <ul class="info-number-list mt-3">
                                                        <li>
                                                            <span>a.</span> You use the Service or attempt to use it for any Prohibited Purpose;
                                                        </li>
                                                        <li>
                                                            <span>b.</span> You attempt to transfer or charge funds from an account that does not belong to you;
                                                        </li>
                                                        <li>
                                                            <span>c.</span> We receive conflicting claims regarding ownership of or the right to withdraw funds from a debit or credit card account;
                                                        </li>
                                                        <li>
                                                            <span>d.</span>You have provided false evidence of your identity or have repeatedly failed to provide true, accurate, current, and complete identity verification or transaction details;
                                                        </li>
                                                        <li>
                                                            <span>e.</span>You attempt to tamper with, hack, modify, overload, corrupt, or otherwise circumvent the security or functionality of the Website and/or Application, or introduce any Malicious Code;
                                                        </li>
                                                        <li>
                                                            <span>f.</span>You are in breach of these Terms and Conditions;
                                                        </li>
                                                        <li>
                                                            <span>g.</span>We have reason to believe that any of the foregoing has occurred or is likely to occur; or
                                                        </li>
                                                        <li>
                                                            <span>h.</span>A Compliance Officer has exercised discretion to terminate or suspend your access.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>IV.</span> How the contract is formed between you and us</h4>
                                            <ul class="info-number-list">
                                                <li>
                                                    <span>A.</span>After you place a money transfer order via the Website or the Application, an email will be sent to you acknowledging that your order has been received. Please note that this does not mean that your order has been accepted.
                                                </li>
                                                <li>
                                                    <span>B.</span>A transaction order constitutes solely an offer to purchase our services, which is subject to our discretionary acceptance. Such acceptance will be communicated to you via email confirming that we are processing your request (hereinafter referred to as "the Confirmation"). The contract between you and us (hereinafter referred to as "the Contract") will only be formed when the Confirmation has been sent.
                                                </li>
                                                <li>
                                                    <span>C.</span>The Contract relates solely to the services that have been confirmed in the Confirmation.
                                                </li>
                                                <li>
                                                    <span>D.</span>We reserve the right to refuse to perform any of the Services (including after Confirmation) if:
                                                    <ul class="info-number-list mt-3">
                                                        <li>
                                                            <span>a.</span>We are unable to obtain satisfactory evidence of your identity
                                                        </li>
                                                        <li>
                                                            <span>b.</span>You provide false, incorrect, or incomplete information
                                                        </li>
                                                        <li>
                                                            <span>c.</span>We are unable to reach you via the contact details provided by you
                                                        </li>
                                                        <li>
                                                            <span>d.</span>Your transfer order, information, or documentation is not provided sufficiently in advance to allow us to process it in accordance with your request
                                                        </li>
                                                        <li>
                                                            <span>e.</span>You attempt to tamper with, hack, modify, overload, corrupt, or otherwise circumvent the security or functionality of the Website and/or the Application, or introduce any Malicious Code
                                                        </li>
                                                        <li>
                                                            <span>f.</span>You are in breach of these Terms and Conditions
                                                        </li>
                                                        <li>
                                                            <span>g.</span>You or the order you placed are in breach of any applicable laws or regulations or are made for a Prohibited Purpose
                                                        </li>
                                                        <li>
                                                            <span>h.</span>Processing the Service in accordance with your order may expose us to liability
                                                        </li>
                                                        <li>
                                                            <span>i.</span>We are unable to process your transfer due to variations in business hours, currency exchange, or currency availability issues, or due to any Force Majeure Event
                                                        </li>
                                                        <li>
                                                            <span>j.</span>We have reason to believe that any of the foregoing has occurred or is likely to occur; or
                                                        </li>
                                                        <li>
                                                            <span>k.</span>A Compliance Officer has exercised discretion to do so.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>E.</span>We shall not be liable for any damages, costs, or losses incurred by the Sender, the Recipient, or any third party if, as a result of any of the circumstances referred to in Clause III.B or VI.D, we fail to complete the transfer of funds in accordance with an order.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>V.</span> Information provided after we process a transaction</h4>

                                            <p>After we process your transaction to the Recipient, an email will be sent to you containing the following information:</p>
                                            <ul class="info-number-list mt-3">
                                                <li>
                                                    <span>A.</span>A transaction reference number.
                                                </li>
                                                <li>
                                                    <span>B.</span>A confirmation of the exact amount sent to the Recipient on your behalf, in both the pay-in and pay-out currencies.
                                                </li>
                                                <li>
                                                    <span>C.</span>A confirmation of the fee charged.
                                                </li>
                                                <li>
                                                    <span>D.</span>The exchange rate applied to your transaction.
                                                </li>
                                                <li>
                                                    <span>E.</span>A confirmation of the bank to which the money has been sent (for bank credit option).
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>VI.</span> Confidentiality/ privacy</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>As a fully regulated institution, we are legally required to obtain, verify, and record information about our customers to provide the Service. Therefore, we may request information from you or consult legal sources to obtain your personal data when offering the Service.</li>
                                                <li><span>B.</span>Your personal information will be processed securely and strictly in accordance with applicable laws and regulations.</li>
                                                <li><span>C.</span>Customer information will not be treated as confidential if it is already public knowledge or becomes public knowledge through no fault of our own.</li>
                                                <li><span>D.</span>We may disclose customer information if required by law, court order, statutory or regulatory requirements, or upon request by the police or other competent authorities for the prevention or detection of crime, fraud, money laundering, or terrorism financing. We may also report suspicious activity to the relevant law enforcement or government authorities</li>
                                                <li><span>E.</span>For more details on confidentiality, privacy, and security, please refer to our Privacy Policy.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>VII.</span> Limitations of liability</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>If a money transfer you ordered is delayed or fails, you may have the right to receive a refund, less applicable fees, or compensation under Money Transfer Regulations. Please contact us at <NavLink to='mailto:info@Le-Zemed.com'>info@Le-Zemed.com</NavLink> for more information regarding refunds and compensation.</li>
                                                <li><span>B.</span>Claims for refund or compensation must be supported by all available evidence.</li>
                                                <li><span>C.</span>If a money transfer in accordance with an order you made and that we Confirmed is delayed or fails and you are not entitled to a refund or compensation under the Money Transfer Regulations, we expressly limit our liability in respect of any such delayed or failed transfer (including for any claimed refund) to the greater of: (a) the amount of any service charge that was paid to us; and (b) €600. The foregoing cap on our liability applies to any single transaction, act, omission or event and to any number of related transactions, acts, and omissions or events.</li>
                                                <li><span>D.</span>Except as provided in clause 9.5, we shall not be liable to you or to any third party in relation to the Services, whether for breach of contract, tort (including negligence), misrepresentation, unjust enrichment or any other grounds, for any indirect, incidental, consequential or special damages including any loss of profits or savings or anticipated profits or savings, loss of data, loss of opportunity, loss or reputation, goodwill or business or any economic loss, even if we are advised in advance of the possibility of such loss.</li>
                                                <li><span>E.</span>
                                                    Nothing in this clause shall:
                                                    <ul class="info-number-list mt-3">
                                                        <li><span>a.</span>Exclude or limit liability on our part for death or personal injury resulting from our negligence,</li>
                                                        <li><span>b.</span>Exclude liability for our fraud, our wilful misconduct or gross negligence.</li>
                                                    </ul>
                                                </li>
                                                <li><span>F.</span>We are not liable for the quality, safety, legality, or delivery of the goods or services that you pay for using the Services.</li>
                                                <li><span>G.</span>
                                                    We shall not be liable for any breach of our obligations under the Contract to you nor for any failure or delay in performance of any obligations under the Contract arising from or attributable to acts, events, omissions or accidents beyond our reasonable control, including, without limitation, where our failure to perform our obligations arise from:
                                                    <ul class="info-number-list mt-3">
                                                        <li><span>a.</span>an act of God, fire, flood, earthquake, windstorm or other natural disaster, explosion or accidental damage, war, threat of or preparation for war, armed conflict, imposition of sanctions, embargo, export controls, breaking off of diplomatic relations or similar actions, terrorist attack, civil war, civil commotion or riots, pandemic or epidemic, industrial disputes, shortages of raw materials or components, general disruptions to transportation, telecommunication systems, power supply or other utilities;</li>
                                                        <li><span>b.</span>the acts, decrees, legislation, regulations or restrictions imposed by any government or state;</li>
                                                        <li><span>c.</span>the actions or omissions of the third parties;</li>
                                                        <li><span>d.</span>malfunctions in communications facilities which cannot reasonably be considered to be under our control and that may affect the accuracy or timeliness of messages you send to us;</li>
                                                        <li><span>e.</span>any losses or delays in transmission of messages arising out of the use of any internet access service provider or caused by any browser or other software which is not under our control; or</li>
                                                        <li><span>f.</span>any Malicious Code interfering with the Service</li>
                                                    </ul>
                                                </li>
                                                <li><span>H.</span>(each, a "Force Majeure Event").</li>
                                                <li><span>I.</span>Our performance under the Contract shall be deemed suspended for the period that the Force Majeure Event continues and the time for performance will be extended for the duration of that period. We will use our reasonable endeavours to find a solution by which our obligations under the Contract may be resumed despite the Force Majeure Event.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>VIII.</span> Your responsibilities and obligations</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>You will not use the Service unless you are at least 18 years old and you have a legal capacity to enter into legally binding contracts.</li>
                                                <li><span>B.</span>The Fees for each Service we have provided to you have to be paid.</li>
                                                <li><span>C.</span>You shall comply with these Terms and Conditions as well as with any applicable laws, rules and regulations.</li>
                                                <li><span>D.</span>
                                                    In relation to your registration and use of the Service you will:
                                                    <ul class="info-number-list mt-3">
                                                        <li><span>a.</span>provide us with accurate, current, complete and true evidence of your identity and any additional information or evidence we may require to confirm your identity;</li>
                                                        <li><span>b.</span>supply us with all information and documentation we may ask in order to process your transfer and to comply with any legal requirements applicable to us or to our partners (including without limitation, the Money Transfer Regulations and the Money Laundering Regulations 2017);</li>
                                                        <li><span>c.</span>update all information you provide to us to keep it accurate, current, complete and true;</li>
                                                        <li><span>d.</span>not use the Service for or in connection with any Prohibited Purpose or attempt to tamper, hack, modify, overload, or otherwise corrupt or circumvent the security and/or functionality of the Website and/or the Application or to infect it with any Malicious Code;</li>
                                                        <li><span>e.</span>transfer money only from your own credit, debit card or bank account. You may not submit a transfer on behalf of another person;</li>
                                                        <li><span>f.</span>not open more than one account with us;</li>
                                                        <li><span>g.</span>keep your Reference Number secure, you must not share the Reference Number or any other transaction details with anybody except the Recipient;</li>
                                                        <li><span>h.</span>use the Service to send money only to people that you know personally or to pay for goods and services purchased from suppliers of whom you have sufficient knowledge and whose identity you verified. You acknowledge that we have no control over the suppliers or over the goods and services for which you use our Services to make payments and we have no responsibility for the quality, safety, legality, or the delivery of such goods or services to you.</li>
                                                    </ul>
                                                </li>
                                                <li><span>E.</span>
                                                    You understand and accept that:
                                                    <ul class="info-number-list">
                                                        <li><span>a.</span>We are legally obliged to retain information about our users and the transactions that we process for up to 5 years or as may be required from time to time by applicable law or by any regulatory authorities;</li>
                                                        <li><span>b.</span>All currency converted as part of the Service will be converted using our rate of exchange (as published on the Website and/or the Application or as may be communicated to you before we issue a Confirmation);</li>
                                                        <li><span>c.</span>We reserve the right to increase the FX Spread when the markets are closed (weekends, bank holidays) to prevent loss stemming from currencies fluctuating and ensure payouts for our customers (we will still display the rate that we are offering on the homepage and the final rate on the checkout page before confirming the transaction);</li>
                                                        <li><span>d.</span>Some countries may impose minimum and maximum thresholds in relation to the amounts that can be sent through our Service;</li>
                                                        <li><span>e.</span>You will be liable to us for all losses which we suffer or incur in relation to any fraud or fraudulent activity by you;</li>
                                                        <li><span>f.</span>You must call us or write an e-mail to us as soon as possible if you believe or suspect that a transfer of funds was not executed properly or that the amount has not been received or was only partly received;</li>
                                                        <li><span>h.</span>It is your responsibility to inform the Recipient of the information he/she will need to provide in order to collect the money you transfer through the Service (such as photographic identification, the exact amount of the send order and the Reference Number).</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>IX.</span> Fees and payment methods</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>The prices for the Service consist of FX Spread and the Fees.</li>
                                                <li><span>B.</span>Our Fees vary from time to time, but changes in the Fees will not apply to any orders in respect for which we have already sent you the Confirmation.</li>
                                                <li><span>C.</span>If you pay by debit card it will be charged as soon as we accept your request for the transfer.</li>
                                                <li><span>D.</span>When you pay by debit card and your order is refused by your bank or by the card issuer, your bank account will not be debited. However, it is possible that your bank or the card issuer might hold the amount you tried to send. If this happens you will need to contact your bank or card issuer to resolve the issue.</li>
                                                <li><span>E.</span>Discounts on our Fees may be available through promotions that we or our partners may offer from time to time. Promotions are subject to terms and conditions and will be honoured in accordance with their published terms.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>X.</span> Cancellations and refunds</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>
                                                    You have a right to cancel an order before payment has been made to the Recipient. You may exercise this right by:
                                                    <ul class="info-number-list mt-3">
                                                        <li><span>a.</span>Calling us on <NavLink to="tel:447446228131">+44 7446 228131</NavLink></li>
                                                        <li><span>b.</span>Emailing us at <NavLink to='mailto:info@Le-Zemed.com'>info@Le-Zemed.com</NavLink></li>
                                                        <li><span>c.</span>If you exercise your right to cancel the order after you have already paid us the funds to be transferred:</li>
                                                        <li><span>d.</span>we will refund money paid by you and intended for a Recipient only under the condition that it has not already been paid out to the Recipient in accordance with your original instructions prior to the cancellation request; and</li>
                                                        <li><span>e.</span>we reserve the right to retain the Fees charged for the Service (and we may charge you with those Fees if they have not yet been paid); and</li>
                                                    </ul>
                                                </li>
                                                <li><span>B.</span>if by the time you notify us of the cancellation of the transfer we have already sent the money to one of our partners in the country of destination, we may not be able to successfully cancel the order, given that the cancellation procedures with our partners differ in length and complexity, as well as often require communication across time zones.</li>
                                                <li><span>C.</span>Refunds can take up to 7 working days to be processed and this depends as well on the customer's bank processes, which are beyond our control.</li>
                                                <li><span>D.</span>We reserve the right not to refund amounts smaller than £3 or €3 and charge a refund fee of £3 or €3 (according to the currency with which you pay us) if the refund has been requested by the customer with no fault of our own.</li>
                                                <li><span>E.</span>If we do not transfer the money to the Recipient in accordance with an order within 45 days after your instructions have been received, provided that you correctly followed our procedures and complied with all our policies, you may ask for a refund of the money transferred to us and intended for the Recipient.</li>
                                                <li><span>F.</span>If the Recipient does not collect the money within 13 months after the date it became available for collection, all rights of cancellation of the order or refund of the money transferred or the Fees shall be deemed to be waived by you.</li>
                                                <li><span>G.</span>Your order expires after 1 month. In case the money has not been collected or the order requires a correction, we reserve the right to cancel your order without prior notice to you and to refund to you the amount that was to be transferred. The refund will not include the Fees paid for the Service, which we will retain.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XI.</span> Complaints</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>
                                                    We value your feedback as it helps us improve our service. We have established internal procedures for complaints. You can make a complaint in writing to us regarding any aspect of the Service by mail or e-mail to the following addresses:
                                                    <ul class="info-number-list mt-3">
                                                        <li><span>a.</span>12 Old Bond Street, London, England, W1S 4PW</li>
                                                        <li><span>b.</span><NavLink to='mailto:info@Le-Zemed.com'>info@Le-Zemed.com</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li><span>B.</span>We will investigate your complaint and use reasonable endeavours to come back to you with the results of our investigation within 7 working days after receipt of your complaint.</li>
                                                <li>
                                                    <span>C.</span>If you are not satisfied with how we have handled your complaint or its outcome, you have the right to refer your complaint to the Financial Ombudsman Service at:
                                                    <ul class="info-number-list mt-3">
                                                        <li><span>•	Address:</span>South Quay Plaza, 183 Marsh Wall, London E14 9SR </li>
                                                        <li><span>•	Telephone:</span><NavLink to="tel:4408000234567">0800 0234 567 </NavLink></li>
                                                        <li><span>•	Email:</span><NavLink to='mailto:complaint.info@financial-ombudsman.org.uk'>complaint.info@financial-ombudsman.org.uk</NavLink></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XII.</span> Money transfer and the payment services regulations</h4>
                                            <p>The Payment Services Regulations 2017 (hereinafter called "the Regulations") govern the transfer of money to recipients within the European Economic Area (being all members states of the European Union, together with Norway, Iceland and Liechtenstein), where the transfer of funds is carried out in Euros, Sterling or the currency of another EEA state which has not adopted the Euro as its currency.</p>
                                            <p>The Regulations regulate payment services, which have an electronic component and place payment services providers into certain categories as well as require certain payment institutions to be authorised by the FCA and to follow conduct of business rules. Please contact us at   <NavLink to='mailto:info@Le-Zemed.com'>info@Le-Zemed.com</NavLink> for more information.</p>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XIII.</span> Written communications</h4>
                                            <p>Applicable laws and regulations require that some of the information we send to you or communications between you and us should be in writing. You agree to receive such written communications electronically. You also agree that electronic means of communication shall be effective for the purpose of the Contract between you and us. The foregoing does not affect your statutory rights.</p>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XIV.</span> Notices and communications</h4>
                                            <p>All notices given to us must be in the English Language and sent to Le-Zemed, 12 Old Bond Street, London, England, W1S 4PWWe may give notices to you in connection with any aspect of the Service or any order either through the e-mail address or the postal address that you provided to us or in any other way permitted pursuant these Terms and Conditions. Notices to you will be deemed received and properly served immediately after an e-mail is sent to you at the address you provided, or where a notice is sent to your postal address, one day after the date of posting in the case of domestic notices and 6 days in the case of international mail.</p>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XV.</span> Transfer of rights and obligations</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>We shall be entitled, without your consent, to transfer our rights and obligations under these Terms and Conditions and under any Contract to any of our affiliates or to any entity or person that acquires our business. Any such transfer of rights and obligation will have effect upon notice being given to you (including notices given through the Website or the Application).</li>
                                                <li><span>B.</span>We are entitled to perform our obligations to you through subcontractors, agents and other third parties.</li>
                                                <li><span>C.</span>You may only transfer your rights and obligations under the Contract if we have agreed for this in writing.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XV.</span> Transfer of rights and obligations</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>If we fail, at any time during the term of the Contract, to insist upon strict performance of any of your obligations under the Contract or any clause of these Terms and Conditions, or if we fail to exercise any of the rights or remedies to which we are entitled under the Contract or by law, this will not constitute a waiver of such rights or remedies and will not relieve you from compliance with such obligations.</li>
                                                <li><span>B.</span>A waiver by us of any default will not constitute a waiver of any subsequent default.</li>
                                                <li><span>C.</span>No waiver by us of any term in these Terms and Conditions will be effective unless it is expressly stated to be a waiver and is communicated to you in writing in accordance with these Terms and Conditions.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XVII.</span> Severability</h4>
                                            <p>If any court or competent authority holds that any of the provisions of these Terms and Conditions or any provisions of the Contract are invalid, unlawful or unenforceable to any extent, that shall not affect the other terms of these Terms and Conditions or the Contract which will continue in full force and effect to the fullest extent permitted by law.</p>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XVIII.</span> Entire agreement</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>These Terms and Conditions and any document expressly referred to in them constitute the whole agreement between us and you and supersede all previous discussions, correspondence, negotiations, previous arrangement, understanding or agreement between us and you relating to the subject matter hereof.</li>
                                                <li><span>B.</span>You acknowledge that, in entering into the Contract and accepting these Terms and Conditions, you do not rely on, or will have no remedies in respect of, any representation or warranty (whether made innocently or negligently) that is not expressly set out in these Terms and Conditions or the documents referred to in them.</li>
                                                <li><span>C.</span>Nothing in this clause limits or excludes any liability for fraud.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XIX.</span> Our right to vary these terms and conditions</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>We reserve the right to revise, amend or replace these Terms and Conditions from time to time.</li>
                                                <li><span>B.</span>Our Terms and Conditions in force at the time that you order Services from us will have effect between you and us for the purpose of that order. We may notify you of a change to the Terms and Conditions after you place an order but before we send you the Confirmation, in which case, unless you notify us within a reasonable period of time and in any event within seven days that you wish to cancel the order, the revised Terms and Conditions will apply.</li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XX.</span> Third party rights</h4>
                                            <p>A person who is not a party to this Agreement shall have no rights to enforce the provisions of this Agreement under the Contracts (Rights of Third Parties) Act 1999.</p>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XXI.</span> Law and jurisdiction</h4>
                                            <p>Contracts for the purchase of our services using the Website or the Application and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) will be governed by English law. Any dispute or claim arising out of or in connection with such contracts or their formation (including non-contractual disputes or claims) will be subject to the non-exclusive jurisdiction of the courts of England and Wales. The foregoing shall be without prejudice to your statutory rights.</p>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XXII.</span> Intellectual property</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>The Website the content, the name Le-Zemed and other names, logos, signs, domain names, email addresses and other indications of origin displayed on the Website relating to our products and/or services and all intellectual property relating to them and contained in them (including but not limited to copyrights, patents, database rights, design right, trade marks,) ("IPRs") are owned by us, our affiliates or third party licensors. Other names and logos of third party product, service and companies displayed on the Website may be the trademarks of third parties. You shall not acquire any right, title or interest in any such IPRs by reason of the Services or the Contract and all right, title and interest in and to the Website and the Application shall remain our property and/or the property of such other third parties.</li>
                                                <li>
                                                    <span>B.</span>You may use the Website and the Application solely for the lawful use of our Services as an individual consumer or business customer, as permitted under these Terms and Conditions. You may view and retain copies of Website pages for personal use only. You may not:
                                                    <ul class="info-number-list">
                                                        <li>
                                                            <span>•</span>Use the Website, Application, or Services for testing or gathering competitive information.
                                                        </li>
                                                        <li>
                                                            <span>•</span>Duplicate, publish, modify, create derivative works from, transfer, sell, or distribute the Website or Application for public or commercial purposes without our express written permission.
                                                        </li>
                                                        <li>
                                                            <span>•</span>Use automated devices such as robots, spiders, or scrapers to access the Website or Application.
                                                        </li>
                                                        <li>
                                                            <span>•</span>Remove or alter copyright, trademark, or other proprietary notices from the Website.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-content">
                                            <h4><span>XXIII.</span> The company and how to get in touch</h4>
                                            <ul class="info-number-list">
                                                <li><span>A.</span>Le-Zemed operates a website (the Website) that enable you to transfer money using a device connected to the Internet and/or a mobile phone.</li>
                                                <li><span>B.</span>Le-Zemed  is a company incorporated and licensed under the laws of the United Kingdom,  engaged in the business of funds remittance with its Head Office located at 12 Old Bond Street, London, England, W1S 4PW</li>
                                                <li><span>C.</span>
                                                    We can be contacted via the following means:
                                                    <ul class="info-number-list mt-3">
                                                        <li><span>a.</span>Telephone: <NavLink to="tel:447446228131">+44 7446 228131</NavLink></li>
                                                        <li><span>b.</span>12 Old Bond Street, London, England, W1S 4PW</li>
                                                        <li><span>c.</span>Email using the email address: <NavLink to='mailto:info@Le-Zemed.com'>info@Le-Zemed.com</NavLink></li>
                                                        <li><span>d.</span>Website: <a href="http://Le-Zemed.com/" target="_blank">http://Le-Zemed.com/</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            )}
        </div>
    );
}

export default Terms_and_Conditions
