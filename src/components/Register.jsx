import DonorRegForm from "./DonorRegForm";
import OrganizationsRegForm from "./OrganizationsRegForm";
import { Card } from "react-bootstrap";
import donor_icon from "../assets/donor-icon.png";
import org_icon from "../assets/org-icon.png";
import { SlArrowLeftCircle } from "react-icons/sl";


const Register = () => {


    const isSuccess = false;

    return (
        <div className="sections" style={{backgroundColor: "#1b5e30"}}>
            <div className="card-wrapper" style={{ height: "100vh", justifyContent: "center", alignItems: "center"}}>
                <div className="card-col" style={{ height: "50vh", backgroundColor: "#fffff9", borderRadius: "10px" }}>
                    <a className='login-link' href="/">
                        <p style={{textDecoration:"underline",paddingLeft:"10px",paddingTop:"10px"}}><SlArrowLeftCircle />Back To Home</p>
                    </a>
                    <div className="card-container" >
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <img src={donor_icon} alt="donor icon" style={{ width: '50px', height: '50px' }} />
                                <Card.Title>Donor</Card.Title>
                                <Card.Text>
                                    Join us in making a difference in the world by responding to the needs of others.
                                </Card.Text>
                                <DonorRegForm />
                            </Card.Body>
                        </Card>
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <img src={org_icon} alt="org icon" style={{ width: '50px', height: '50px' }} />
                                <Card.Title>Organization</Card.Title>
                                <Card.Text>
                                    Join us to change the way people donate to your organization.
                                </Card.Text>
                                <OrganizationsRegForm />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;