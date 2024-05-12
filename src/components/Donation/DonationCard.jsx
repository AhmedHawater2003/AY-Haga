import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function DonationCard({
  showDetails,
  donationDetails,
  setShownDonation,
  setIsVolunteering = () => {},
}) {
  const handleClick = () => {
    setShownDonation((prev) => donationDetails);
    showDetails();
    setIsVolunteering(donationDetails["isVolunteering"]);
  };
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
        {donationDetails["badges"]}
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
