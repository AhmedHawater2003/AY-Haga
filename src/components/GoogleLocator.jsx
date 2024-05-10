import { useState } from "react";
import LocationPicker from "react-leaflet-location-picker";

const GoogleLocator = ({getAddress,getArea,getGovernorate}) => {
    const [pointVals, setPointVals] = useState([[29.9867, 31.439]]);
    const [address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");

    const handlePointClick = async (point) => {
        setPointVals([point]);
        try {
            const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${point[0]}&lon=${point[1]}&apiKey=e84e2c145c33490389e48c236e3cf970`);
            const data = await response.json();
            console.log(data);
            setAddress(data.features[0].properties.formatted || "Address not found");
            setArea(data.features[0].properties.district || data.features[0].properties.village || data.features[0].properties.county || data.features[0].properties.state);
            setGovernorate(data.features[0].properties.state || "Governorate not found");
        } catch (error) {
            console.error("Error fetching address:", error);
            setAddress("Error fetching address");
        }

        // Update the point values

    };

   
    getAddress(address);
    getArea(area);
    getGovernorate(governorate);
    const handleReset = (e) => {
        e.preventDefault();
        setPointVals([]);
        setAddress("");
        setArea("");
        setGovernorate("");
    }


    const pointMode = {
        banner: false,
        control: {
            values: pointVals,
            onClick: handlePointClick,
        
        },
    };

    const startPort = {
        center: [29.9867, 31.439],
        zoom: 30,
    };

    const styles = {
        border: "2px solid #1b5e39",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    };

    const mapStyle = {
        height: "350px",
        width: "100%",
        borderRadius: "10px",
    };

    const buttonStyle = {
        backgroundColor: "transparent",
        color: "black",
        border: "2px solid #1b5e39",
        borderRadius: "5px",
        marginTop: "10px",
        marginBottom: "10px",
        cursor: "pointer",
    };

    return (
        <div style={styles}>
            <LocationPicker mapStyle={mapStyle} showInputs={false} startPort={startPort} pointMode={pointMode} />
            <button style={buttonStyle} onClick={handleReset}>Reset & Edit Address Manually</button>
        </div>
    );
};
export default GoogleLocator;
