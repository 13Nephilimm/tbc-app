import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import heroImg from "./assets/hero-image.png";
import starImg from "./assets/star.png";
import partner1 from "./assets/upwork.svg";
import partner2 from "./assets/petal.svg";
import partner3 from "./assets/the new york times.svg";
import partner4 from "./assets/rakuten.svg";
import partner5 from "./assets/vice.svg";
import partner6 from "./assets/dell.svg";
import cards1 from "./assets/cards-1.png";
import cards2 from "./assets/cards-2.png";
import mobileImg from "./assets/mobiles.png";
import googlePlay from "./assets/google-play.png";
import appStore from "./assets/app-store.png";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section className="hero-section">
        <div className="gradient-circle"></div>
        <img src={starImg} alt="star" className="star star-1" />
        <img src={starImg} alt="star" className="star star-2" />
        <div className="container">
          <div className="hero-container">
            <div className="text-box">
              <h1 className="hero-heading">
                Get More From <br></br> Your Money
              </h1>
              <p className="hero-description">
                Discover the power of our secure and rewarding credit cards.
                Explore our range of credit cards and take control of your
                finances today.
              </p>
              <button className="main-button">Get Started &rarr;</button>
            </div>
            <div className="hero-img-box">
              <img src={heroImg} alt="hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <img src={starImg} alt="star" className="star star-3" />
        <img src={starImg} alt="star" className="star star-4" />
        <img src={starImg} alt="star" className="star star-5" />
        <div className="container">
          <div className="partners-container">
            <div className="info-tab">
              <h2 className="info-heading">16y</h2>
              <h3 className="info-subheading">Experience</h3>
            </div>
            <div className="info-tab">
              <h2 className="info-heading">250+</h2>
              <h3 className="info-subheading">Merchant Partner</h3>
            </div>
            <div className="info-tab">
              <h2 className="info-heading">18+</h2>
              <h3 className="info-subheading">Years Experience</h3>
            </div>
            <div className="info-tab">
              <h2 className="info-heading">10.2k+</h2>
              <h3 className="info-subheading">Worldwide Clients</h3>
            </div>
          </div>
          <div className="partners">
            <img src={partner1} alt="partner" className="partner-img" />
            <img src={partner2} alt="partner" className="partner-img" />
            <img src={partner3} alt="partner" className="partner-img" />
            <img src={partner4} alt="partner" className="partner-img" />
            <img src={partner5} alt="partner" className="partner-img" />
            <img src={partner6} alt="partner" className="partner-img" />
          </div>
        </div>
      </section>

      <section className="what-we-offer-section">
        <img src={starImg} alt="star" className="star star-6" />
        <img src={starImg} alt="star" className="star star-7" />
        <img src={starImg} alt="star" className="star star-8" />
        <img src={starImg} alt="star" className="star star-9" />
        <div className="container">
          <h2 className="what-we-offer-heading">What Do We Offer?</h2>
          <div className="what-we-offer-container">
            <div className="wwo-text-box">
              <h2 className="wwo-heading">
                Design your personalized <br></br> credit card.
              </h2>
              <p className="wwo-description">
                You have the freedom to personalize the design of your credit
                card, ensuring a truly unique experience that makes you feel
                extraordinary
              </p>
              <button className="main-button">Create New Card &rarr;</button>
            </div>
            <div className="wwo-img-box">
              <img src={cards1} alt="cards" />
            </div>
          </div>
          <div className="what-we-offer-container-2">
            <div className="wwo-img-box">
              <img src={cards2} alt="cards" />
            </div>
            <div className="wwo-text-box">
              <h2 className="wwo-heading">
                Find the Perfect Credit Card <br></br> for You
              </h2>
              <p className="wwo-description">
                Discover your ideal credit card with ease. Our comprehensive
                selection caters to every financial need and lifestyle. Whether
                you seek cashback rewards, travel perks, or building credit, we
                have the perfect credit card waiting for you. Unleash the
                possibilities and find the credit card that fits your unique
                goals and aspirations.
              </p>
              <button className="main-button">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="more-apps-section">
        <img src={starImg} alt="star" className="star star-10" />
        <img src={starImg} alt="star" className="star star-11" />
        <img src={starImg} alt="star" className="star star-12" />
        <div className="gradient-circle"></div>
        <div className="container">
          <div className="more-apps-container">
            <div className="more-apps-text-box">
              <h2 className="more-apps-heading">
                Easy Way To Manage <br></br> Your Finances
              </h2>
              <p className="more-apps-description">
                Easy to use mobile app that support on android and ios.
              </p>
              <div className="more-apps-links">
                <a href="#">
                  <img src={googlePlay} alt="google play" />
                </a>
                <a href="#">
                  <img src={appStore} alt="app store" />
                </a>
              </div>
            </div>
            <div className="more-apps-img-box">
              <img src={mobileImg} alt="cards" />
            </div>
          </div>
        </div>
      </section>

      <img src={starImg} alt="star" className="star star-13" />
      <img src={starImg} alt="star" className="star star-14" />
      <img src={starImg} alt="star" className="star star-15" />

      <Footer />
    </div>
  );
}

export default App;
