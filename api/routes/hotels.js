import express from "express";
import {
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel
} from '../controllers/hotel.js';
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET_ALL
router.get("/", getHotels);

export default router