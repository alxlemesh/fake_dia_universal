const express = require("express");
const path = require("path");
const serveIndex = require("serve-index");


const app = express();
const port = 8080;

app.use(express.static(__dirname));


app.get("/", serveIndex(__dirname, {icons: true}));


app.listen(port, ()=>{
console.log("Server running on 8080")

})
