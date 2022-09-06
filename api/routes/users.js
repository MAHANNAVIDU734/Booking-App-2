import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from '../controllers/user.js';
import { verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
        res.send("hello user, you are logged in")
    })

router.get("/check/user/:id", verifyUser, (req, res, next) => {
        res.send("hello user, you are logged in and you can delete you account")
    })
    //UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET_ALL
router.get("/", getUsers);

export default router