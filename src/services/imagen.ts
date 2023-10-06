import fs from "fs";
import { DIR_UPLOAD_IMAGES } from "../../contants";

export function imagenExistes(nameImagen: string) {
  const filePath = DIR_UPLOAD_IMAGES + nameImagen;

  if (fs.existsSync(filePath)) {
    console.log(`El archivo ${nameImagen} existe en la carpeta`);
    return true;
  }
  console.log(`El archivo ${nameImagen} no existe en la carpeta.`);
  return false;
}

