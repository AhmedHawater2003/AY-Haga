import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard() {
  return (
    <Card style={{width: '18rem',display:"flex",flexDirection:"column"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button style={
          {
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "-20px"
          }
        } variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

//  

export default PostCard;