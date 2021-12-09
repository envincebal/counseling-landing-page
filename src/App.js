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
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/emdr" component={EMDRPage} />
        <Route path="/fbcc" component={FBCCPage} />
        <Route path="/ppd" component={PPDPage} />
        <Route path="/tfcbt" component={TFCBTPage} /> <Route path="/rates" component={RatesPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
