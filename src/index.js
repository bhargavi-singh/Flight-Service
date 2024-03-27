const express= require("express")

const {ServerConfig,Logger} = require('./config/index')
const apiRoutes = require("./Routes")

const app = express();

app.use('/api',apiRoutes)
app.listen(ServerConfig.PORT,()=>{
    console.log("Successfully staarted the server on PORT: " + ServerConfig.PORT)
    Logger.info("Successfully started the server","root" ,{})
})