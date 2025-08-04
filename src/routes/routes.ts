import { Router } from "express";
import { getPlayerById, getPlayers } from "../controllers/players-controller";

const router = Router();

router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);

export default router;