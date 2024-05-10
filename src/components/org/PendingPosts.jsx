import CategoryModal from "./CategoryModal";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DonationsGrid from "../Donation/DonationsGrid";
const PendingPosts = () => {
  return (
    <div>
      <div>
        <Row>
          <Col>
            <h1>Pending Posts</h1>
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
            isPending={true}
            isWaiting={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PendingPosts;
