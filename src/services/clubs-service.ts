import { findAllClubs } from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helpers";

export const getClubsService = async () => {
    const data = await findAllClubs();
    return HttpResponse.ok(data);
}