const express = require('express'),
    app = express()

app.use(express.static(__dirname))


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/main.html")
})

app.get("/res", (req, res)=>{
    var data = {
        name: req.query.name,
        age: Number(req.query.age),
        dob: req.query.dob,
        graduation: req.query.gra,
        dept: req.query.dept,
        year: Number(req.query.year),
        email: req.query.email,
        phone: req.query.phone,
        gender: req.query.gender
    }
    res.send(JSON.stringify(data));
})


app.listen(3000, ()=>{
    console.log("Server Started");
})