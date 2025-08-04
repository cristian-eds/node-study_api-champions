export interface PlayerModel {
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: Statistics
}

interface Statistics {
    Overall: number,
    Pace: number,
    Shooting: number,
    Passing: number,
    Dribbling: number,
    Defending: number,
    Physical: number
}