import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import HowToUse from "./components/HowToUse";
import OrgHomePage from "./pages/OrgHomePage";
import AdminPage from "./pages/AdminPage";
import Register from "./components/Register";



function App() {
  return (
   <Router>
    <Switch>
      
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/how-to-use" component={HowToUse} />
      <Route path="/org" component={OrgHomePage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/" component={LandingPage} />
      
    </Switch>
   </Router>

  );
}

export default App;
