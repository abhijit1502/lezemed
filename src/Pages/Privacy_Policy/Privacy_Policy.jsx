import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../Components/Preloader';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Privacy_Policy_Seo from '../../SEO/Privacy_Policy_Seo';

function Privacy_Policy() {
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
                    <Privacy_Policy_Seo />
                    <Header />
                    <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
                        <div className="container">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">Privacy Policy</h1>
                                <ul className="breadcumb-menu">
                                    <li><a href="/">Home</a></li>
                                    <li>Privacy Policy</li>
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
                                            <h4>Purpose and Scope</h4>
                                            <p className="mb-2">
                                                SSRemit, its affiliates and subsidiaries place a priority on the Data Privacy of its employees, contractors, clients, prospective clients, service providers and other partners or third parties and on the importance of compliance with Data Protection and Privacy laws worldwide. Thus, SSRemit has developed this Policy that outlines and explains the appropriate principles concerning collecting, processing, transferring and using an individual's Personal Data during everyday business.
                                            </p>
                                            <p>
                                                In its collection, use and disclosure of Personal Data, SSRemit strives to balance the needs of managing its business effectively while minimising intrusiveness and complying with local legal requirements. In some countries, additional requirements beyond this policy may be applied to comply with local legislation. Data Protection and Privacy has been and will continue to be an integral component of SSRemit business practices.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Definitions
                                            </h4>
                                            <ul className='info-number-list'>
                                                <li>
                                                    <span>A</span>
                                                    Data Protection or Data Privacy shall mean collection, processing, use, storage, security and transmission of Personal Data in compliance with applicable law and this Policy as outlined below.
                                                </li>
                                                <li>
                                                    <span>B</span>
                                                    Data Subject means the individual natural person associated with any Personal Data (i.e., employee, temporary employee, applicant, clients/client employees, contractors, service providers or potential clients/client employees or other partners to the extent that Personal Data is being collected).
                                                </li>
                                                <li>
                                                    <span>C</span>
                                                    Personal Data means any information relating to a natural person who is identified or is identifiable by some number or characteristic, including data on current, past and prospective employees, clients/client employees, prospective clients/client employees, agents, contractors, service providers and other partners or third parties. Examples may include: name, e-mail, postal address, personal telephone/fax number, employee number, Social Security/national ID number, birth date, salary, stock information, job level, benefits, family information, jobs history, training history, address details, telephone numbers, background checks and drug testing to the extent permitted by local law, details on business cards, etc.
                                                </li>
                                                <li>
                                                    <span>D</span>
                                                    Processing Personal Data (processing) means any operation or set of operations, which is performed upon Personal Data (whether or not by electronic or manual means). This includes collection, recording, copying, filing, organizing, storage, adaptation, alteration, retrieval, consultation, use and disclosure by transmission, dissemination, or otherwise making available Personal Data. It also includes the alignment or combination, blocking, erasure or destruction of Personal Data.
                                                </li>
                                                <li>
                                                    <span>E</span>
                                                    Sensitive Data is a subset of Personal Data and (subject to local requirements) may include but are not limited to race or ethnic origin, religious or philosophical beliefs, political affiliations/opinions, trade union membership, health information, sexual orientation, disabilities, certain types of personal financial data, etc.
                                                </li>
                                                <li>
                                                    <span>F</span>
                                                    Business Need for Personal Data means those functions or duties requiring access to Personal Data that are necessary to carry out SSRemit business functions, to comply with local applicable laws, or to administer its Human Resources functions. Such business needs include:
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Data Protection and Privacy Principles
                                            </h4>
                                            <p className="mb-2">
                                                The Data Protection and Privacy principles below are the foundation of this Policy. As such, SSRemit will, through appropriate management and controls on an ongoing basis, monitor implementation of and compliance with these principles. It shall be a fundamental principle with SSRemit that any Personal Data shall be processed fairly, sensitively, respectfully and in accordance with this Policy and applicable local law.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Notice:</strong> SSRemit will inform individuals about the purpose for which it collects Personal Data, how to contact SSRemit with inquiries or complaints, and the administrative process by which the complaints will be resolved. Where appropriate, SSRemit will communicate the types of third parties to which SSRemit discloses Personal Data, and the choices, procedures and means SSRemit offers for limiting use and disclosure of personal information will also be provided.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Choice:</strong> Subject to applicable local law and SSRemit policies, general procedures and business requirements SSRemit will ensure that the rights of Data Subjects, about whom Personal Data is held, can be fully exercised. This includes the right of an individual to choose how their Personal Data provided is used, whether the use of such data is incompatible with the original purpose or authorizations, or is disclosed to third parties, subject to laws requiring disclosure and consent.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Onward Transfer:</strong> SSRemit will ensure that all transfers of Personal Data, whether within or outside of the SSRemit group, are protected by suitable safeguards and in accordance with applicable local law. Further, unless required by court or another legal mandate, or except as discussed below, Personal Data will only be transferred outside of SSRemit if the receiving party has entered into a Data Protection Agreement with SSRemit or comparable safeguards are in place. Where Personal Data is transferred outside of SSRemit, SSRemit will ensure that any such transfer protects the legitimate interests of Data Subjects in line with this Policy and applicable local law.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Security:</strong> SSRemit is committed to protecting Personal Data against unauthorized use or disclosure. To ensure the appropriate use of Personal Data, and prevent unauthorized access to such Personal Data, as well as prevent loss, alteration or destruction of Personal Data. In adherence with Data Protection and Privacy laws worldwide and internal SSRemit policies, SSRemit will address security at all appropriate technology infrastructure points.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Data Integrity:</strong> SSRemit will collect and process appropriate Personal Data only to the extent that there is a Business Need for Personal Data, to fulfill operational needs, and/or to comply with legal requirements, including those legal requirements of the countries in which the Personal Data was collected, as applicable. SSRemit will take reasonable steps to ensure that all Personal Data is relevant, accurate, complete, current, and reliable for its intended use. All Data Subjects have a responsibility to assist SSRemit in this effort.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Data Retention:</strong> SSRemit will not keep Personal Data for longer than is necessary for the purpose or purposes, for which it was intended, or as required by contractual agreement, by law or regulation, by other SSRemit policies or, where applicable, for the appropriate statute of limitations period.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Access:</strong> Upon request, SSRemit will provide individuals with access to their Personal Data and, when appropriate, allow the individuals to request that their Personal Data be corrected or updated by SSRemit, as required by law or SSRemit policies.
                                            </p>
                                            <p className="mb-2">
                                                <strong>Enforcement and Oversight:</strong> SSRemit will address complaints or disputes regarding Personal Data promptly, in an orderly fashion and courteously. SSRemit will provide or, where appropriate, endeavor to provide notification to Data Subjects about how to file a complaint or inquiry and the administrative process to follow. SSRemit will perform a self-assessment on a regular basis to verify that this Policy is communicated, prominently displayed, implemented, and accessible. SSRemit will cooperate with the relevant Data Protection Authorities in the investigation and resolution of complaints relating to this Policy. SSRemit will seek, in a timely manner as practicable, to comply in good faith with the advice of these authorities.
                                            </p>
                                            <p>
                                                <strong>Training and Audit:</strong> SSRemit will provide appropriate training to all relevant staff handling and dealing with the Processing of Personal Data so that any such processing will be carried out in accordance with this Policy and applicable law. SSRemit will further ensure that Data Protection and Privacy is subject to periodic audit.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Transferring your data outside the "EEA"
                                            </h4>
                                            <p className="mb-2">
                                                We may transfer your data outside the European Economic Area (the "EEA").
                                            </p>
                                            <p>
                                                Some of those countries have a European Commission adequacy decision, which means they are considered to offer an adequate level of data protection.
                                                Other countries do not have the same level of legal protection as countries in the EEA, or with an <NavLink to="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en" target="_blank">adequacy decision.</NavLink> If we do transfer your data in this way, we will take steps to ensure that it is protected to the same levels that apply in the EEA. This may include, for example, ensuring that the organisation receiving the data is registered with the EU-US Privacy Shield (in the case of transfers to the USA), or that we use the EU's <NavLink to="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en" target="_blank"> model contractual clauses.</NavLink>
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Covered Entities
                                            </h4>
                                            <p>
                                                SSRemit entities and all non- SSRemit entities (e.g., agents, contractors, outsource service providers and processors) accessing or processing Personal Data are required to comply with this Policy with respect to such Personal Data.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Responsibilities
                                            </h4>
                                            <p className="mb-2">
                                                The Data Officer is primarily responsible for adopting, implementing, and maintaining this Policy.
                                            </p>
                                            <p>
                                                The responsibility for the implementation of the Policy lies with every employee and manager, whether the Personal Data is in the form of manual records, computer data or arises from communication with employees and Data Subjects both online (electronic) or off line (manual records). Implementation requirements will include the development of notice and consent forms to provide to managers and Data Subjects where required by applicable laws. Employees, agents, contractors and their employees are individually responsible for providing/maintaining accurate information and for protecting the personal information that SSRemit has about any individual in support of the implementation of this Policy. Employees who violate this Policy or applicable legal requirements are subject to discipline, up to and including termination of employment, dependent on the severity of the violation. Agents or contractors or their employees who violate this Policy or applicable legal requirements are subject to termination and/or other contractual penalties. Employees, agents and contractors should also be aware that if they knowingly or recklessly obtain or divulge Personal Data without SSRemit consent, they may be committing a criminal offence.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Data Privacy Investigation and Dispute Resolution
                                            </h4>
                                            <p className="mb-2">
                                                Human Resources will address any complaints or disputes regarding Personal Data promptly and courteously, and will follow all applicable laws to respond to the complaint. This includes inquiries from Data Subjects, employee councils, management sponsors, or regulatory authorities.
                                            </p>
                                            <p>
                                                A responsible person designated by management will handle investigations regarding non-compliance with this Policy. All investigations will be handled under the legal requirements of the geographic area where the investigation is taking place.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Access to Personal Data
                                            </h4>
                                            <p className="mb-2">
                                                The Data Officer is responsible for maintaining and safeguarding Personal Data, and for ensuring that access to such Personal Data is restricted to persons who have a job-related "need to know" or who have documented access rights. Covered entities may have access to Personal Data on a business related need to know for purposes generally compatible with the collection of the Personal Data.
                                            </p>
                                            <p>
                                                Data Subjects may review the contents of any files as requested pursuant to the access principles detailed above and subject to other SSRemit policies. All Data Subjects must authenticate themselves based on online or offline standards (i.e., pass codes) set by SSRemit before gaining access. Data Subject may request a copy of documents, but under no circumstances will an individual be allowed to remove any documents from the file or be allowed to remove the original file from SSRemit. Certain confidential files, such as investigative files, will not be accessible to Data Subjects, in particular employees.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Verification of Employment
                                            </h4>
                                            <p className="mb-2">
                                                Regarding any requests for information concerning an SSRemit employee's status which may be received from non-SSRemit entities, only members of the human resources department are authorized to release any information and this will be restricted to confirmation of current employment including the employee's name, the most recent job title and the dates of SSRemit employment. Additional information will not be provided without the employee's authorization.
                                            </p>
                                            <p>
                                                To opt out of being tracked by Google Analytics across all websites visit <NavLink to="https://tools.google.com/dlpage/gaoptout" target="_blank">http//tools.google.com/dlpage/gaoptout</NavLink>
                                            </p>
                                            <p>
                                                Use of Universal Analytics (Google)
                                            </p>
                                            <ul className='info-number-list mb-4'>
                                                <li>
                                                    <span>A</span>
                                                    _ga
                                                </li>
                                                <li>
                                                    <span>B</span>
                                                    _gali
                                                </li>
                                                <li>
                                                    <span>C</span>
                                                    _gat_ UA 112356073-1
                                                </li>
                                                <li>
                                                    <span>D</span>
                                                    _gid
                                                </li>
                                            </ul>
                                            <p>
                                                <strong>Purpose:</strong> These cookies collect information about how visitors use our website. We use the information to compile reports and to make improvements. The cookies collect information in an anonymous form, including where visitors have come to the website from and the pages they visited.
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Contacting us
                                            </h4>
                                            <p>
                                                If you have any questions regarding this notice, or any questions relating to data protection or privacy, you can contact us at <NavLink to='mailto:info@ssremit.com'>info@ssremit.com</NavLink>
                                            </p>
                                        </div>

                                        <div className="blog-content">
                                            <h4>
                                                Changes to Policy
                                            </h4>
                                            <p>
                                                SSRemit may from time to time amend this Policy to reflect changes in any applicable legislation. SSRemit will notify Data Subjects of such amendments as soon as reasonably practicable.
                                            </p>
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

export default Privacy_Policy
