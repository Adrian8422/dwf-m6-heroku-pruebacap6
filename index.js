"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
// console.log(process.env.FIREBASE_CONECTION);
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola soy el servidor, heroku"
    });
});
app.listen(port, function () {
    console.log("Hola soy express y estoy corriendo en el puerto" + port);
});
