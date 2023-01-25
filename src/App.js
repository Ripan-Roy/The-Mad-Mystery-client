import React from "react";
import Header from "./componenets/header/Header";
import AboutUs from "./componenets/aboutUs/AboutUs";
import AboutGame from "./componenets/aboutGame/AboutGame";
import Store from "./componenets/store/Store";
import SubscriptionForm from "./componenets/subscriptionForm/SubscriptionForm";
import SocialContact from "./componenets/socialContact/SocialContact";
import Work from "./componenets/work/Work";
import Footer from "./componenets/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <AboutGame />
      <Store />
      <SubscriptionForm />
      <SocialContact />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
