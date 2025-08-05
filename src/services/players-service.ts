import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helpers";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    if (!data) {
        return await HttpResponse.noContent();
    }

    return await HttpResponse.ok(data);
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);

    if (!data) {
        return await HttpResponse.noContent();
    }

    return await HttpResponse.ok(data);
}

export const postPlayerService = async (player: PlayerModel) => {
    
    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        return await HttpResponse.created();
    }

    return await HttpResponse.badRequest();

}   

export const deletePlayerByIdService = async (id: number) => {
    
    const playerById = await getPlayerByIdService(id);
    if(playerById.statusCode === 204) return HttpResponse.notFound(); 

    await PlayerRepository.deletePlayerById(id);

    return HttpResponse.ok(
        {message: "Deleted"}
    );
}