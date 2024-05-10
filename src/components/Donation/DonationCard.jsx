import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DonationCard = ({ showDetails, donationDetails, setShownDonation}) => {
  const handleClick = () => {
    setShownDonation((prev) => donationDetails);
    showDetails();
  };

  return (
    <Card style={{ width: "20rem", display: "flex", flexDirection: "column" }}>
      <Card.Img
        variant="top"
        src={donationDetails["image"]}
        style={{ height: "15rem", objectFit: "fill" }}
      />
      <Card.Body>
        <Card.Title>{donationDetails["title"]}</Card.Title>
        <Card.Text>{donationDetails["summary"]}</Card.Text>
        <Button
          variant="primary"
          onClick={handleClick}
          data
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "-20px",
          }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};
export default DonationCard;
