const express = require("express");
const app = express();
const PORT = 5001
const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://mateusADMIN:jegerenkvinneogduerenmann123@ucash.64jr6z3.mongodb.net/?retryWrites=true&w=majority&appName=UCash"

mongoose.connect(mongoUrl).then(() => {
    console.log(`Database connected`)
})

app.get("/", (req, res) =>{
    res.send("Res Started")
})

app.listen(PORT, () => {
    console.log(`Server is loading on ${PORT}`)
})