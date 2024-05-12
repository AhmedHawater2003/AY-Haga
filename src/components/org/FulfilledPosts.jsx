import CategoryModal from "./CategoryModal";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DonationsGrid from "../Donation/DonationsGrid";

const FulfilledPosts = () => {
  return (
    <div>
      <div>
        <Row>
          <Col>
            <h1>Fulfilled Posts</h1>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
              marginRight: "30px",
            }}
          >
            <CategoryModal />
          </Col>
        </Row>

        <br/>
        <div>
          <DonationsGrid
            isDonor={false}
            isFulfilled={true}
            isPending={false}
            isWaiting={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FulfilledPosts;
