import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import SpecialtyPage from "./components/SpecialtyPage/SpecialtyPage";
import RatesPage from "./components/RatesPage/RatesPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="app-container">
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/specialty" component={SpecialtyPage} />
        <Route exact path="/rates" component={RatesPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      </div>

      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
