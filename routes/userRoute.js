import express from "express"
import { create, deleteUser, fetch, update } from "../controller/userController.js";

const route = express.Router();

route.get("/getallusers", fetch) // So the whole path would be http://localhost:300//api/user/getallusers

// or you can directly write as below, rather than wirting route in one file and API in controller.js

// route.get("/getallusers", async (req, res) => {
//     try {
//         const users = await User.find();
//         if (users.length === 0) {
//             return res.status(404).json({ message: "User not Found." });
//         }
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error." });
//     }
// });


route.post ("/create",create)   // So the whole path would be http://localhost:300//api/user/create
route.put("/update/:id", update)  // So the whole path would be http://localhost:300//api/user/update
route.delete("/delete/:id",deleteUser) // So the whole path would be http://localhost:300//api/user/deleteUser

export default route;
