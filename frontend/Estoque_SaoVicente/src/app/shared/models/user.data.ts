import { Moves } from "./moves.data";

export interface User {
    user: string;
    password: string;
    role: number;
    moves: Moves[];
}
