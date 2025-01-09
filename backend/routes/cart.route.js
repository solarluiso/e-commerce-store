import express from "express";

import {
  addToCart,
  removeAllFromCart,
} from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);

export default router;
