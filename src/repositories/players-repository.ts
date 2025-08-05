import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        }
    },
    {
        id: 2,
        name: "Kylian Mbappé",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 97,
            Shooting: 90,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 79,
        }
    },
    {
        id: 3,
        name: "Cristiano Ronaldo",
        club: "Al-Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 80,
            Shooting: 93,
            Passing: 75,
            Dribbling: 83,
            Defending: 35,
            Physical: 78,
        }
    },
    {
        id: 4,
        name: "Neymar Jr.",
        club: "Santos",
        "nationality": "Brazil",
        position: "Attacking Midfielder",
        statistics: {
            Overall: 89,
            Pace: 88,
            Shooting: 85,
            Passing: 88,
            Dribbling: 94,
            Defending: 35,
            Physical: 62,
        }
    }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deletePlayerById = async (id: number) => {
   const index = database.findIndex(player => player.id === id);
   
   if(index !== -1) {
    database.splice(index,1);
   }

}