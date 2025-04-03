import express from "express"
import { create, deleteUser, fetch, update } from "../controller/userController.js";

const route = express.Router();

route.get("/getallusers", fetch)

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


route.post ("/create",create)
route.put("/update/:id", update)
route.delete("/delete/:id",deleteUser)

export default route;
