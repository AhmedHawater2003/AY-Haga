import { useState } from "react";
import LocationPicker from "react-leaflet-location-picker";

const GoogleLocator = () => {
    const [pointVals, setPointVals] = useState([]);
    const [address, setAddress] = useState("");
    
    const handlePointClick = async (point) => {
        // Fetch the address using reverse geocoding
        setPointVals([point]);
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${point[0]}&lon=${point[1]}&zoom=18&addressdetails=0`);
            const data = await response.json();
            setAddress(data.display_name || "Address not found");
        } catch (error) {
            console.error("Error fetching address:", error);
            setAddress("Error fetching address");
        }
        
        // Update the point values
        
    };
    
    const pointMode = {
        banner: true,
        control: {
            values: pointVals,
            onClick: handlePointClick,
            onRemove: (point) => console.log("I've just been clicked for removal :(", point),
        },
    };
    
    const circleMode = {
        banner: false,
    };

    return (
        <div>
            <LocationPicker pointMode={pointMode} circleMode={circleMode} />
            {address && <p>Address: {address}</p>}
        </div>
    );
};

export default GoogleLocator;
