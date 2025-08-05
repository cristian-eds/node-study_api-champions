import { StatisticsModel } from "./statistics-mode";

export interface PlayerModel {
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: StatisticsModel
}
