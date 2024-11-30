import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, TextField } from "@mui/material";


const steps = ["Adım 1", "Adım 2", "Adım 3"];

const SikayetPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="p-8">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mt-4">
        <TextField
          label="Şikayetiniz"
          variant="outlined"
          fullWidth
          className="mb-4"
          onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
          Geri
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Gönder" : "İleri"}
        </Button>
      </div>
    </div>
  );
};

export default SikayetPage;
