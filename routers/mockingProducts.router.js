import { Router } from "express";
import {getProducts, saveProducts} from '../controllers/products.controller.js';
import { ro } from "@faker-js/faker";

const router = Router();

router.get("/", getProducts);
router.post("/", saveProducts);

export default router;