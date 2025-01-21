import { Base } from "../common";

export interface Place extends Base{
    name: string;
    location: { ltd: number, lng: number }
}