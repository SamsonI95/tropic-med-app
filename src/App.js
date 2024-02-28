//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/Reusables/NavBar";
import Footer from "./components/Reusables/Footer";
import HideFooter from "./components/Reusables/HideFooter";
import HideNavBar from "./components/Reusables/HideNavBar";

//Pages
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import RegSelect from "./components/pages/RegSelect";
import CustomerReg from "./components/PageComponents/CustomerReg";
import DoctorReg from "./components/PageComponents/DoctorReg";
import OrgReg from "./components/PageComponents/OrgReg";
import UserPage from "./components/pages/UserPage";

//UserPanelComponent
import Profile from "./components/UserPanel/Profile";
import PharmDrug from "./components/UserPanel/PharmDrug";


//Icon components
import { setupIonicReact } from "@ionic/react";

//Styles
import "./App.css";
import "@ionic/react/css/core.css";
setupIonicReact();

function App() {
  return (
    <>
      <Router>
        <HideNavBar>
          <NavBar />
        </HideNavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reg-select" element={<RegSelect />} />
          <Route path="/customer-reg" element={<CustomerReg />} />
          <Route path="/doc-reg" element={<DoctorReg />} />
          <Route path="/org-reg" element={<OrgReg />} />
          <Route path="/user" element={<UserPage />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/pharm-drug" element={<PharmDrug />} />
          </Route>
        </Routes>
        <HideFooter>
          <Footer />
        </HideFooter>
      </Router>
    </>
  );
}

export default App;
