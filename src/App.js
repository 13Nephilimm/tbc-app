import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/sections/hero-section/HeroSection";
import PartnersSection from "./components/sections/partners-section/PartnersSection";
import WhatWeOfferSection from "./components/sections/wwo-section/WhatWeOfferSection";
import MoreAppsSection from "./components/sections/more-apps-section/MoreAppsSection";
import Footer from "./components/Footer/Footer";
import bgStarline from "./assets/bg-starline.svg";

function App() {
  return (
    <main className="App">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <img src={bgStarline} className="bg-starline" />
      <WhatWeOfferSection />
      <MoreAppsSection />
      <Footer />
    </main>
  );
}

export default App;
