const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());             // ahora sí, después de definir app
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
