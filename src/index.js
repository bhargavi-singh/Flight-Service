const express= require("express")

const {ServerConfig,Logger} = require('./config/index')
const apiRoutes = require("./Routes")
const {City,Airport} = require('./models')

const app = express();
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use('/api',apiRoutes)
app.listen(ServerConfig.PORT,async()=>{
    console.log("Successfully staarted the server on PORT: " + ServerConfig.PORT)
    Logger.info("Successfully started the server","root" ,{})
    //  
    // const bengaluru = await Airport.findByPk(1)
    // const bairport = await bengaluru.createAirport({name:'Bengaluru Airport',code:'BLR',cityId:1})

    // console.log(bairport)
    
})