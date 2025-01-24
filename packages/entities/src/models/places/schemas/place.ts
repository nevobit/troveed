import { Base } from "../../../common";

interface Location {
    country: string;
    city: string;
    province: string;
    address: string;
    lat: number;
    lng: number;
}

interface Review {
    user: string;
    text: string;
    photos: string[];
}

export interface Place extends Base{
    name: string;
    description: string;
    location: Location;
    images: string[];
    activities: string[];
    category: string;
    reviews: Review[];
}