import { Stepper } from "@mantine/core";

function Demo({ first, second, third, fourth, active }) {
  return (
    <Stepper color="green" active={active} size="lg" className="p-4">
      <Stepper.Step
        label="Step 1"
        description="Submitting Donation"
        loading={first}
      />
      <Stepper.Step
        label="Step 2"
        description="Delivery Matching"
        loading={second}
      />
      <Stepper.Step
        label="Step 3"
        description="Waiting Delivery"
        loading={third}
      />
      <Stepper.Step
        label="Step 3"
        description="Donation Recieved"
        loading={fourth}
      />
    </Stepper>
  );
}

export default Demo;
