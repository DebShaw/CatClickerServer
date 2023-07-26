import express from "express";
import {
  addCat,
  getAllCats,
  activateCat,
  incrementClicks,
  updateCat,
} from "../controllers/cats.js";

const router = express.Router();

router.post("/add", addCat);
router.get("/get", getAllCats);
router.patch("/activate/:id", activateCat);
router.patch("/increment/:id", incrementClicks);
router.patch("/update/:id", updateCat);

export default router;
