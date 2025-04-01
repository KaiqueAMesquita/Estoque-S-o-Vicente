import { Moves } from "./moves.data";

export interface User {
    user: string;
    password: string;
    role: number | null;
    moves: Moves[] | null;
}
