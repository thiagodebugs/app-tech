import { Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Review({ getData }) {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Review das Informações
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={getData?.type}
            sx={{ ".MuiListItemText-primary": { fontWeight: "bold" } }}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary={"Cliente"} secondary={getData?.Cliente} />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary={"Bairro"} secondary={getData?.Bairro} />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Rede Wi-Fi"}
            secondary={getData?.["Rede Wi-Fi"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Senha Wi-Fi"}
            secondary={getData?.["Senha Wi-Fi"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Dispositivos"}
            secondary={getData?.Dispositivos}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary={"Emenda"} secondary={getData?.Emenda} />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary={"Potência"} secondary={getData?.Potência} />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Modelo ONU"}
            secondary={getData?.["Modelo ONU"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Serial ONU"}
            secondary={getData?.["Serial ONU"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Patrimônio ONU"}
            secondary={getData?.["Patrimônio ONU"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Metros de Cabo Drop"}
            secondary={getData?.["Metros de Cabo Drop"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quantidade de Alça"}
            secondary={getData?.["Quantidade de Alça"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quantidade de Abraçadeira"}
            secondary={getData?.["Quantidade de Abraçadeira"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quantidade de Conector"}
            secondary={getData?.["Quantidade de Conector"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quantidade de PTO"}
            secondary={getData?.["Quantidade de PTO"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quantidade de Cordão"}
            secondary={getData?.["Quantidade de Cordão"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quantidade de Plaqueta de Identificação"}
            secondary={getData?.["Quantidade de Plaqueta de Identificação"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quantidade de Tubets"}
            secondary={getData?.["Quantidade de Tubets"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Quem Acompanhou a Visita?"}
            secondary={getData?.["Quem Acompanhou a Visita?"]}
          />
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText
            primary={"Observações"}
            secondary={getData?.Observações}
          />
        </ListItem>
      </List>
    </>
  );
}
