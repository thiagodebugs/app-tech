import { Typography, Grid, TextField } from "@mui/material";

export default function ObservacaoForm({ setData, getData }) {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Observações
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quem Acompanhou a Visita?"]}
            required
            name="acompanhou"
            label="Quem Acompanhou a Visita?"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quem Acompanhou a Visita?": `${event.target.value.toUpperCase()}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Observações}
            required
            name="observacao"
            label="Observações Gerais"
            fullWidth
            variant="standard"
            multiline
            rows={4}
            onChange={(event) => {
              setData({
                ...getData,
                Observações: `${event.target.value}`,
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
