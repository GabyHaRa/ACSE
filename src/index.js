const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const port = process.env.PORT || 9000;
require("dotenv").config();
//Importar ruta de usuario 
const userRutes = require("./rutes/user");

app.listen(port,() =>  console.log('Servidor escuchando por el puerto',port));
app.use("/",userRutes);


//middleware
app.use(express.json())
app.use('/api',userRutes);


app.get("/",(req,res) => {
    res.send("API EN CONSTRUCCION")
})

//conexion base de datos
// PASS=KL123456789 letra mayuscula.
mongoose.connect(process.env.BDMONGO_URI)
.then(() => console.log("Conexión establecida."))
.catch((error)=> console.log(error));