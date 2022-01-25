import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
// console.log(process.env.FIREBASE_CONECTION);
app.get("/hola", (req, res) => {
  res.json({
    message: "Hola soy el servidor",
  });
});

app.listen(3500, () => {
  console.log(
    `Service active de express corriendo en http://localhost:${port}`
  );
});