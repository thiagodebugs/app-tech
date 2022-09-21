import {
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const type = [
  "ATIVAÇÃO",
  "MANUTENÇÃO",
  "MUDANÇA DE ENDEREÇO",
  "TROCA DE EQUIPAMENTO",
  "OUTRO (INFORMAR EM OBSERVAÇÃO)",
];

export default function ClienteForm({ setData, getData }) {
  const [getType, setType] = useState(getData?.type);

  const handleChangeType = (event) => {
    setType(event.target.value);
    setData({ ...getData, type: `${event.target.value}` });
  };
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Informações Bases
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={getType}
              label="type"
              onChange={handleChangeType}
            >
              {type.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Cliente}
            required
            name="cliente"
            label="Nome do Cliente"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                Cliente: `${event.target.value.toUpperCase()}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Bairro}
            required
            name="bairro"
            label="Bairro"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                Bairro: `${event.target.value.toUpperCase()}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Rede}
            required
            name="redeWifi"
            label="Rede Wi-Fi"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Rede Wi-Fi": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Senha}
            required
            name="senhaWifi"
            label="Senha Wi-Fi"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                "Senha Wi-Fi": `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Dispositivos}
            name="dispositivos"
            label="Quantidade de Dispositivos"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                Dispositivos: `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Emenda}
            name="emenda"
            label="Emenda"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                Emenda: `${event.target.value}`,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={getData?.Potência}
            name="potencia"
            label="Potência"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(event) => {
              setData({
                ...getData,
                Potência: `${event.target.value}`,
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
