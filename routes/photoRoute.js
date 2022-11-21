import express from "express";
import { createPhoto, getAll, getGllery } from "../controllers/photoController.js";

const router = express.Router();

router.route("/").post(createPhoto).get(getAll);

router.route("/:id").get(getGllery);

export default router;


