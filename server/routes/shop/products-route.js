import express from "express";
import { getFilteredProduct, getProductDetail } from "../../controllers/shop/products-controller.js";

const router = express.Router();

router.get("/get", getFilteredProduct);
router.get('/get/:id' , getProductDetail)

export default router;
