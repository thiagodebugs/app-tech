import { Typography, Grid, TextField } from "@mui/material";

export default function EstoqueForm({ setData, getData }) {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Informações de Estoque
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Modelo ONU"]}
            required
            name="onu"
            label="Modelo da ONU"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Modelo ONU": `${event.target.value.toUpperCase()}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Serial ONU"]}
            required
            name="snOnu"
            label="Serial da ONU (GPON)"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Serial ONU": `${event.target.value.toUpperCase()}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Patrimônio ONU"]}
            required
            name="patrimonioOnu"
            label="Patrimônio da ONU"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Patrimônio ONU": `${event.target.value.toUpperCase()}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Metros de Cabo Drop"]}
            required
            name="caboDrop"
            label="Metros de Cabo Drop"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Metros de Cabo Drop": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quantidade de Alça"]}
            required
            name="alcaDrop"
            label="Quantidade de Alça de Drop"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quantidade de Alça": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quantidade de Abraçadeira"]}
            required
            name="abracadeira"
            label="Quantidade de Abraçadeira"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quantidade de Abraçadeira": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quantidade de Conector"]}
            required
            name="conector"
            label="Quantidade de Conector"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quantidade de Conector": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quantidade de PTO"]}
            required
            name="pto"
            label="Quantidade de PTO"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quantidade de PTO": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quantidade de Cordão"]}
            required
            name="cordao"
            label="Quantidade de Cordão"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quantidade de Cordão": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quantidade de Plaqueta de Identificação"]}
            required
            name="plaqueta"
            label="Quantidade de Plaqueta Identificação"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quantidade de Plaqueta de Identificação": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.["Quantidade de Tubets"]}
            required
            name="tubets"
            label="Quantidade de Tubets"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Quantidade de Tubets": `${event.target.value}`,
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
