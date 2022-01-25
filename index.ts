import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
// console.log(process.env.FIREBASE_CONECTION);
app.get("/hola", (req, res) => {
  res.json({
    message: "Hola soy el servidor, heroku",
  });
});

app.listen(port, () => {
  console.log("Hola soy express y estoy corriendo en el puerto" + port);
});
