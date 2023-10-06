import { Router } from "express";
import { authentification } from "../services/oracle/authentification";
const router = Router();

router.get("/", (_req, res) => {
  res.send("OCI AUTHENTIFICATION");
  authentification();
});

export default router;
