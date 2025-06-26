// airefino-relay.js (modo relay desde Render)
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// 🌐 URL pública del servidor local (expuesto vía ngrok)
const LOCAL_RELAY = "https://368a-152-168-205-72.ngrok-free.app";

app.use(cors());
app.use(express.json());

// Estado del relay
app.get("/", (req, res) => {
  res.send("🛰️ Relay AireFino en Render activo");
});

// 🔌 Encender caldera
app.post("/encender", async (req, res) => {
  try {
    const response = await fetch(`${LOCAL_RELAY}/encender`, { method: "POST" });
    const result = await response.text();
    res.send("🔁 Relay encendido: " + result);
  } catch (error) {
    console.error("❌ Error relay encender:", error.message);
    res.status(500).send("⚠️ Falló relay encender");
  }
});

// ❄️ Apagar caldera
app.post("/apagar", async (req, res) => {
  try {
    const response = await fetch(`${LOCAL_RELAY}/apagar`, { method: "POST" });
    const result = await response.text();
    res.send("🔁 Relay apagado: " + result);
  } catch (error) {
    console.error("❌ Error relay apagar:", error.message);
    res.status(500).send("⚠️ Falló relay apagar");
  }
});

// 🟢 Consultar estado real
app.get("/estado", async (req, res) => {
  try {
    const response = await fetch(`${LOCAL_RELAY}/estado`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ Error relay estado:", error.message);
    res.status(500).json({ estado: "error", mensaje: error.message });
  }
});

app.listen(port, () => {
  console.log(`🌐 Relay Render activo en http://localhost:${port}`);
});
