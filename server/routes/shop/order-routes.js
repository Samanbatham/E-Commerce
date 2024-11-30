import express from "express";
import {
  createOrder,
  capturePayment,
  getAllOrderByUser,
  getOrderDetails,
} from "../../controllers/shop/order-controller.js";

const router = express.Router();

router.post("/create", createOrder);
router.post("/capture", capturePayment);
router.get("/list/:userId", getAllOrderByUser);
router.get("/details/:id", getOrderDetails);

export default router;