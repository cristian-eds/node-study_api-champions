import { findAllPlayers } from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helpers";

export const getPlayerService = async () => {
    const data = await findAllPlayers();
    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}