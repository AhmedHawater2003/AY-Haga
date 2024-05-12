import Accordion from "react-bootstrap/Accordion";
import "./trackerStyle.css";
import Stepper from "./Stepper";
import { Badge, Rating } from "@mantine/core";
import TrackingDetials from "./TrackingDetails";

const tempData = [
  {
    "Estimated Delivery Time": "29 May 2024",
    "Traking Number": "BD0459652",
    "Deliverd By": "--",
    Contact: "--",
  },

  {
    "Estimated Delivery Time": "2 Jun 2024",
    "Traking Number": "BD0259752",
    "Deliverd By": "Omar Ali",
    Contact: "+201873456789",
  },

  {
    "Estimated Delivery Time": "2 April 2024",
    "Traking Number": "BD03359701",
    "Deliverd By": "Omar Ali",
    Contact: "+201873456789",
    "Actual Delivery Time": "3 April 2024",
    "Orgnization FeedBack": <Rating defaultValue={5} color="green" />,
  },
];

function DonationTracker() {
  return (
    <Accordion className="track">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="track-accordion-header">
          <span>Summer clothes for Orphans</span>
          <Badge variant="light" color="green" size="xl" radius="lg">
            Delivery Matching
          </Badge>
        </Accordion.Header>
        <Accordion.Body>
          <Stepper active={1} second={true} />
          <TrackingDetials donationPrimaryDetails={tempData[0]} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span>Arsenic Trioxide blood cancer drug</span>
          <Badge variant="light" color="green" size="xl" radius="lg">
            Waiting Delivery
          </Badge>
        </Accordion.Header>
        <Accordion.Body>
          <Stepper active={2} third={true} />
          <TrackingDetials donationPrimaryDetails={tempData[1]} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span>Physics books for secondary grade</span>
          <Badge variant="light" color="green" size="xl" radius="lg">
            Donation Recieved
          </Badge>
        </Accordion.Header>
        <Accordion.Body>
          <Stepper active={4} />
          <TrackingDetials donationPrimaryDetails={tempData[2]} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default DonationTracker;
