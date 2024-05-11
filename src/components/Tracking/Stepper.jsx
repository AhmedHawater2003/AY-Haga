import { Stepper } from "@mantine/core";

function Demo() {
  return (
    <Stepper color="green" active={1} size="xl">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
      <Stepper.Step label="Step 4" description="Get full access" />
    </Stepper>
  );
}

export default Demo;
