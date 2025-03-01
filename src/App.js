import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";
import Error from "./Pages/Error";
import ContactUs from "./Pages/Contact/ContactUs";
import GeneralFAQ from "./Pages/FAQ/GeneralFAQ";
import Help from "./Pages/Help/Help";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Livenesscheck from "./Pages/Onboarding/Livenesscheck";
import Finish from "./Pages/Onboarding/Finish";
import OnboardingFAQ from "./Pages/FAQ/OnboardingFAQ";
import DataSafety from "./Pages/Data_Safety/DataSafety";
import Privacy_Policy from "./Pages/Privacy_Policy/Privacy_Policy";
import Complaint_Policy from "./Pages/Complaint_Policy/Complaint_Policy";
import Terms_and_Conditions from "./Pages/Terms_and_Conditions/Terms_and_Conditions";
import Money_Transfer from "./Pages/Money_Transfer/Money_Transfer";
import Customer_Duty from "./Pages/Customer_Duty/Customer_Duty";

function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
  
      <Routes>
      <Route path="/*" element={<Error />} /> 
      <Route path="/" element={<Home />} /> 
      <Route path="/about-us" element={<AboutUs />} /> 
      <Route path="/contact" element={<ContactUs />} /> 
      <Route path="/generalfaq" element={<GeneralFAQ />} /> 
      <Route path="/help" element={<Help />} /> 
      <Route path="/onboarding" element={<Onboarding />} /> 
      <Route path="/livenesscheck" element={<Livenesscheck />} /> 
      <Route path="/finish" element={<Finish />} /> 
      <Route path="/onboarding-faq" element={<OnboardingFAQ />} /> 
      <Route path="/data-safety" element={<DataSafety />} /> 
      <Route path="/privacy-policy" element={<Privacy_Policy />} /> 
      <Route path="/complaint-policy" element={<Complaint_Policy />} /> 
      <Route path="/terms-and-conditions" element={<Terms_and_Conditions />} /> 
      <Route path="/money-transfer" element={<Money_Transfer />} /> 
      <Route path="/customer-duty" element={<Customer_Duty />} /> 
      </Routes>
      
    </div>
  );
}

export default App;
