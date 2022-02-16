"use strict"

const express = require("express");

const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
 
const db = require ("./db");
db.connect(error => {
    if(error) throw error
    console.log ("Mysql Connected")
})

app.get("/", (req,res) => {
    res.send({
        message: "GET Succeed",
        data: {
            description :
            "Data Showed"
        }
    })
})

app.use("/penduduk", require("./routes/penduduk.route"))

const port = 6969;
app.listen(port, () => {
    console.log(`Server di ${port}`);
  });
  