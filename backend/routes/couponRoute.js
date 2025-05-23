import express from "express"
import { adminRoute, protectRoute } from "../middleware/authMiddleware.js";
import { applyCoupon, getCoupon } from "../controllers/couponController.js";


const router = express.Router();


router.post("/", protectRoute, applyCoupon);
//late add add coupon route for admin
router.get("/", protectRoute, adminRoute, getCoupon);


export default router;