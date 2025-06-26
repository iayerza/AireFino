const cors = require("cors");
app.use(cors());
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" AireFino Relay activo");
});

app.post("/encender", (req, res) => {
  console.log(" Caldera: ENCENDER");
  res.send("Encendido OK");
});

app.post("/apagar", (req, res) => {
  console.log("❄️ Caldera: APAGAR");
  res.send("Apagado OK");
});

app.listen(port, () => {
  console.log(`Servidor AireFino activo en puerto ${port}`);
});
