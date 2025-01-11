import express from "express";

import { protectRoute } from "../middleware/auth.middleware";
import { getCoupon } from "../controllers/coupon.controller";

const router = express.Router();

router.get("/", protectRoute, getCoupon);

export default router;
