import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import HowToUse from "./components/HowToUse";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Contact} />
        <Route path="/how-to-use" exact component={HowToUse} />
      </Switch>
    </Router>
  );
}

export default App;
