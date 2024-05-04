import male_icon from '../assets/male-icon.png';
import female_icon from '../assets/female-icon.png';
const Contact = () => {
    return (
        <div className="sections">
            <div className="section-title">Our Team</div>
            <div className="card-wrapper">
                <div className="card-container">
                    <div className="card">
                        <img src={male_icon} alt='medical_icon' className="card-icon"></img>
                        <div className="card-title">Abdullah Mahmoud</div>
                        <a className="card-description" href='https://www.linkedin.com/in/abdullahm2002/'>LinkedIn</a>
                    </div>
                    <div className="card">
                        <img src={male_icon} alt='blood_icon' className="card-icon"></img>
                        <div className="card-title">Abdelrahman Talaat</div>
                        <a className="card-description" href='https://www.linkedin.com/in/abdelrahman-talaat-ba8a64244/'>LinkedIn</a>
                    </div>
                    <div className="card">
                        <img src={female_icon} alt='school_icon' className="card-icon"></img>
                        <div className="card-title">Ahd Mostafa</div>
                        <a className="card-description" href='https://www.linkedin.com/in/ahd-mostafa-a36833231/'>LinkedIn</a>
                    </div>
                    <div className="card">
                        <img src={male_icon} alt='food_icon' className="card-icon"></img>
                        <div className="card-title">Ahmed Hawater</div>
                        <a className="card-description" href='https://www.linkedin.com/in/ahmed-hawater/'>LinkedIn</a>
                    </div>
                    <div className="card">
                        <img src={male_icon} alt='clothing_icon' className="card-icon"></img>
                        <div className="card-title">Ali Shokry</div>
                        <a className="card-description" href='https://www.linkedin.com/in/ali-shokry-80b007236/'>LinkedIn</a>
                    </div>
                    <div className="card">
                        <img src={male_icon} alt='toy_icon' className="card-icon"></img>
                        <div className="card-title">Youssef Elshennawy</div>
                        <a className="card-description" href='https://www.linkedin.com/in/youssef-elshenawy/'>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;