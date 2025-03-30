import { Moves } from "./moves.data";

export interface User {
    name: string;
    password: string;
    role: number;
    moves: Moves[];
}
