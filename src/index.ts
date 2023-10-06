import express from "express";
import fileUpload from "express-fileupload";
import imagenRouter from "./routes/imagen";
import ociRouter from "./routes/oci";
import { PORT } from "../contants";

const app = express();
app.use(express.json()); // middleware que transforma la red.body a un json
app.use(
  fileUpload({
    limits: {
      fileSize: 10000000, // Around 10MB
    },
    abortOnLimit: true,
  })
);

//_ ignora
app.get("/", (_req, res) => {
  console.log("Some pinged here!!");
  res.send("pong");
});

app.use("/api/images", imagenRouter);
app.use("/api/oci", ociRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
