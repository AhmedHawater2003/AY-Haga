import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function DonationCard({ showDetails, donationDetails, setShownDonation }) {
  const handleClick = () => {
    setShownDonation((prev) => donationDetails);
    showDetails();
  };

  // const oo = (
  //   <Card
  //     style={{
  //       width: "18rem",
  //       display: "flex",
  //       flexDirection: "column",
  //     }}
  //   >
  //     <Card.Img
  //       variant="top"
  //       src={donationDetails["image"]}
  //       style={{ height: "15rem", objectFit: "fill" }}
  //     />
  //     <Card.Body>
  //       <Card.Title>{donationDetails["title"]}</Card.Title>
  //       <Card.Text>{donationDetails["summary"]}</Card.Text>
  //       <Button
  //         variant="primary"
  //         onClick={handleClick}
  //         style={{
  //           display: "block",
  //           width: "100%",
  //           padding: "10px",
  //           marginBottom: "-20px",
  //         }}
  //       >
  //         View Details
  //       </Button>
  //     </Card.Body>
  //   </Card>
  // );
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="justify-content-between "
    >
      <Card.Section component="div">
        <Image src={donationDetails["image"]} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{donationDetails["title"]}</Text>
        <Badge color="red">URGENT</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {donationDetails["summary"]}
      </Text>

      <Button color="teal" fullWidth mt="md" radius="md" onClick={handleClick}>
        View Details
      </Button>
    </Card>
  );
}
export default DonationCard;
