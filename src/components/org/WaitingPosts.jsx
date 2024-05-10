import CategoryModal from "./CategoryModal";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DonationsGrid from "../Donation/DonationsGrid";
const WaitingPosts = () => {
  return (
    <div>
      <div>
        <Row>
          <Col>
            <h1>Waiting Posts</h1>
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

        <div />
        <div>
          <DonationsGrid
            isDonor={false}
            isFulfilled={false}
            isPending={false}
            isWaiting={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WaitingPosts;
