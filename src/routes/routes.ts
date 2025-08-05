import { Router } from "express";
import { deletePlayerById, getPlayerById, getPlayers, postPlayer } from "../controllers/players-controller";

const router = Router();

router.get("/players", getPlayers);
router.post("/players", postPlayer);

router.get("/players/:id", getPlayerById);

router.delete("/players/:id", deletePlayerById);

export default router;