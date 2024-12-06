const { default: axios } = require("axios")
const cron = require("node-cron")
const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.get("/", (req, res) => {
    res.json({activated:true})
})

cron.schedule("*/10 * * * *", async () => {
    console.log("Pasaron 10 minutos")
    await axios.get("https://fideliza-back.onrender.com/user/")
    console.log("Peticiones realizadas")
})