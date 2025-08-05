import { Router } from "express";
import { deletePlayerById, getPlayerById, getPlayers, postPlayer, updatePlayer } from "../controllers/players-controller";

const router = Router();

router.get("/players", getPlayers);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayerById);
router.patch("/players/:id", updatePlayer);

router.get("/players/:id", getPlayerById);

export default router;