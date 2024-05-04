import med_icon from '../assets/medical_icon.png';
import blood_icon from '../assets/blood-drop.png';
import toy_icon from '../assets/toys-icon.png';
import food_icon from '../assets/food-icon.png';
import clothing_icon from '../assets/clothes-icon.png';
import school_icon from '../assets/school-icon.png';
import InsightsCard from './InsightsCard';

const Sections = ({ insights, titles, values }) => {
    Sections.defaultprops = {
        insights: false,
        titles: ["Medical Sector", "Blood Donations", "School Donations", "Food Donations", "Clothing Donations", "Toy Donations"],
        values: [250, 100, 150, 200, 300, 50],
    };
    return (
        <div className="sections">
            <div className="section-title">{!insights ? 'Our Services' : 'Insights'}</div>
            <div className="card-wrapper">
                {!insights ? <div className="card-container">
                    <div className="card">
                        <img src={med_icon} alt='medical_icon' className="card-icon"></img>
                        <div className="card-title">Medical Sector</div>
                        <div className="card-description">Donate Medications, Medical Equipment & Supplies</div>
                    </div>
                    <div className="card">
                        <img src={blood_icon} alt='blood_icon' className="card-icon"></img>
                        <div className="card-title">Blood Donations</div>
                        <div className="card-description">Save lives by donating your blood.</div>
                    </div>
                    <div className="card">
                        <img src={school_icon} alt='school_icon' className="card-icon"></img>
                        <div className="card-title">School Donations</div>
                        <div className="card-description">Support education by donating supplies, books, and equipment to schools.</div>
                    </div>
                    <div className="card">
                        <img src={food_icon} alt='food_icon' className="card-icon"></img>
                        <div className="card-title">Food Donations</div>
                        <div className="card-description">Help fight hunger by donating food to those in need.</div>
                    </div>
                    <div className="card">
                        <img src={clothing_icon} alt='clothing_icon' className="card-icon"></img>
                        <div className="card-title">Clothing Donations</div>
                        <div className="card-description">Make a difference by donating clothes to those who need them.</div>
                    </div>
                    <div className="card">
                        <img src={toy_icon} alt='toy_icon' className="card-icon"></img>
                        <div className="card-title">Toy Donations</div>
                        <div className="card-description">Brighten a child's day by donating toys to bring joy and smiles.</div>
                    </div>
                </div>
                    :
                    <div className="card-container">
                        {titles.map((title, index) => {
                            return <InsightsCard key={index} title={title} value={values[index]} />
                        })}
                    </div> 
                }
            </div>
        </div>
    );
}


export default Sections;