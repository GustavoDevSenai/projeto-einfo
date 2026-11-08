const express = require("express")

const app = express()

app.get("/einfo",(req,res)=>{
    res.send("Hello, Word!")
})

app.listen(3333,()=>{
    console.log("Servidor rodando na porta 3333")
})