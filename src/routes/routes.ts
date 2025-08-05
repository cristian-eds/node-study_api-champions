import { Router } from "express";
import { getPlayerById, getPlayers, postPlayer } from "../controllers/players-controller";

const router = Router();

router.get("/players", getPlayers);
router.post("/players", postPlayer);

router.get("/players/:id", getPlayerById);

export default router;