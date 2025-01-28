import { Base } from "../../../common";

export interface Categori extends Omit<Base, 'statusType'> {
    name: string;
    description: string;
    icon: string;
    image: string;
    }