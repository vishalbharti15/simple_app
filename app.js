const express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.get("/", function(req, res){
    res.send("<h1><center>Welcome Page</center></h1>")
})

app.get("/about", function(req, res){
    res.send("<h1><center>About Page</center></h1>")
})

app.listen(port, function(err){
    console.log("Server started at port ", port)
})