import { Request, Response } from "express"
import { deletePlayerByIdService, getPlayerByIdService, getPlayerService, postPlayerService, updatePlayerService } from "../services/players-service"
import { StatisticsModel } from "../models/statistics-mode";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService(); 
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id); 
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await postPlayerService(bodyValue); 
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deletePlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerByIdService(id); 
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;

    const httpResponse = await updatePlayerService(id, bodyValue); 
    res.status(httpResponse.statusCode).json(httpResponse.body);
}