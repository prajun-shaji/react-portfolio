import "./app.scss";
import Contact from "./components/contact/Contact";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <section id="HOMEPAGE">
        <Navbar />
        <Introduction />
      </section>
      <section id="SERVICES">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="PORTFOLIO">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="CONTACT">
        <Contact />
      </section>
    </>
  );
};

export default App;
