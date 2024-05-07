import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import HowToUse from "./components/HowToUse";
function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/how-to-use" exact component={HowToUse} />
        <Route path="/admin" exact component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
