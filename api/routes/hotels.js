import express from "express";
import Hotel from '../models/Hotel'

const router = express.Router();

//CREATE 
router.post("/:id?limit=5", async(req, res) => {

        const newHotel = new Hotel(req.body)

        try {
            const savedHotel = await newHotel.save()
            res.status(200).json(savedHotel)
        } catch (err) {
            res.status(500).json(err)
        }
    })
    //UPDATE
    //DELETE
    //GET
    //GET_ALL
export default router