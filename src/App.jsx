import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import HowToUse from "./components/HowToUse";
import OrgHomePage from "./pages/OrgHomePage";
import { Navbar } from "react-bootstrap";
import Register from "./components/Register";
import DonorRegForm from "./components/DonorRegForm";


function App() {
  return (
   <Register/>
  );
}

export default App;
