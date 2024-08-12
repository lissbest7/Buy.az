import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sponsors from "./components/Sponsors";
import Info from "./components/Info";
import OurPartner from "./components/OurPartners";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Sponsors />
      <Info />
      <OurPartner />
      <Footer />
    </>
  );
}

export default App;
