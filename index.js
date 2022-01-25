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
app.listen(3500, function () {
    console.log("Service active de express corriendo en http://localhost:".concat(port));
});
