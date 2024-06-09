import { Step, StepLabel, Stepper, Box } from "@mui/material";

// Componente de pasos usado en el carrito
const steps = ["Carrito de compras", "Entrega", "Pago"];

export const Steps = ({ activeStep }) => {
  return (
    <>
      <div className="steps">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </>
  );
};
