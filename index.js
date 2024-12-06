const { default: axios } = require("axios")
const cron = require("node-cron")

cron.schedule("*/10 * * * *", async () => {
    console.log("Pasaron 10 minutos")
    await axios.get("https://fideliza-back.onrender.com/user/")
    console.log("Peticiones realizadas")
})