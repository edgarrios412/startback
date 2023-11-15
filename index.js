const { default: axios } = require("axios")
const cron = require("node-cron")

cron.schedule("*/10 * * * *", async () => {
    console.log("Pasaron 10 minutos")
    await axios.get("https://natalieback.onrender.com/user/")
    await axios.get("https://burgermake.onrender.com/user/")
    console.log("Peticiones realizadas")
})