import { StatusType } from "./constants";

export interface Base {
    id: string;
    status: StatusType;
    updatedAt: Date;
    createdAt: Date;
}