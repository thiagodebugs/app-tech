import {
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import {
  ClienteForm,
  EstoqueForm,
  ObservacaoForm,
  Review,
} from "../components";

const steps = ["Cliente", "Estoque", "Observações", "Review"];

function getStepContent(step, setData, getData) {
  switch (step) {
    case 0:
      return <ClienteForm setData={setData} getData={getData} />;
    case 1:
      return <EstoqueForm setData={setData} getData={getData} />;
    case 2:
      return <ObservacaoForm setData={setData} getData={getData} />;
    case 3:
      return <Review setData={setData} getData={getData} />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Index() {
  const [getData, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [getActiveStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(getActiveStep + 1);
    console.log(getData);
  };

  const handleBack = () => {
    setActiveStep(getActiveStep - 1);
  };

  const handleClear = () => {
    setData(null);
    setActiveStep(0);
  };
  const handleCopy = () => {
    var text = JSON.stringify(getData);
    text = text.replaceAll("{", "");
    text = text.replaceAll("}", "");
    text = text.replaceAll(",", "\n");
    text = text.replaceAll('"', "");
    text = text.replaceAll(":", ": ");
    text = text.replaceAll("type: ", "");
    text = text.replaceAll(`${getData.type}`, `*${getData.type}*`);

    navigator.clipboard.writeText(text);

    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checklist
          </Typography>
          <Stepper activeStep={getActiveStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    ".MuiStepLabel-labelContainer": {
                      display: { xs: "none", sm: "flex" },
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box>{getStepContent(getActiveStep, setData, getData)}</Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {getActiveStep > 0 && (
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ mt: 3, ml: 1 }}
                startIcon={<NavigateBeforeIcon />}
              >
                Voltar
              </Button>
            )}

            {getActiveStep == 3 && (
              <Button
                variant="outlined"
                onClick={handleClear}
                sx={{ mt: 3, ml: 1 }}
                startIcon={<RotateLeftIcon />}
              >
                Limpar
              </Button>
            )}

            {getActiveStep == 3 && (
              <Button
                variant="contained"
                onClick={handleCopy}
                sx={{ mt: 3, ml: 1 }}
                startIcon={<CopyAllIcon />}
              >
                Copiar
              </Button>
            )}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                This is a success message!
              </Alert>
            </Snackbar>
            {getActiveStep < 3 && (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                endIcon={<NavigateNextIcon />}
              >
                Próximo
              </Button>
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
}
