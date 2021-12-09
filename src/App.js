import {  BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import EMDRPage from "./components/SpecialtyPage/EMDRPage/EMDRPage";
import FBCCPage from "./components/SpecialtyPage/FBCCPage/FBCCPage";
import PPDPage from "./components/SpecialtyPage/PPDPage/PPDPage";
import TFCBTPage from "./components/SpecialtyPage/TFCBTPage/TFCBTPage";

import RatesPage from "./components/RatesPage/RatesPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className="app-container">
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/emdr" component={EMDRPage} />
        <Route exact path="/fbcc" component={FBCCPage} />
        <Route exact path="/ppd" component={PPDPage} />
        <Route exact path="/tfcbt" component={TFCBTPage} /> <Route exact path="/rates" component={RatesPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
