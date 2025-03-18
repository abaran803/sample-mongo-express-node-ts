import express from "express";
import userControllers from "./users.controller";

const router = express.Router();

router.get("/", userControllers.getAll);
router.get("/:id", userControllers.get);
router.post("/", userControllers.create);
router.put("/:id", userControllers.update);
router.delete("/:id", userControllers.remove);

export default router;
