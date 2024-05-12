import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import DonorPage from "./components/DonorPage";
import OrgHomePage from "./pages/OrgHomePage";
import AdminPage from "./pages/AdminPage";
import Register from "./components/Register";
import DonorRegForm from "./components/DonorRegForm";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import HowToUse2 from "./components/HowToUse2";

function App() {
  return (
    <MantineProvider>
      {
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/donorreg" component={DonorRegForm} />
            <Route path="/donor" component={DonorPage} />
            <Route path="/org" component={OrgHomePage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/how-to-use" component={HowToUse2} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      }
    </MantineProvider>
  );
}

export default App;
