import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { imagenExistes } from "../services/imagen";
import { DIR_UPLOAD_IMAGES } from "../../contants";

const router = Router();

router.get("/", (_req, res) => {
  res.send("Fetching all the imagen");
});

router.post("/upload", (req: any, res: any) => {
  const { image } = req.files;

  if (!image) return res.sendStatus(400);

  if (/^imagen/.test(image.mimetype)) return res.sendStatus(400);

  const extensionFile = image.name.split(".").pop();

  const newId = uuidv4();

  const newName = newId + "." + extensionFile;

  const existsImagen = imagenExistes(newName);
  if (!existsImagen) {
    image.mv(DIR_UPLOAD_IMAGES + newName);
  }

  res.sendStatus(200);
});

export default router;
