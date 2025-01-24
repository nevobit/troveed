import { Schema } from 'mongoose';
import { Place } from './place';

export const PlaceSchemaMongo = new Schema<Place>({
    name: { type: String },
    description: { type: String },
    location: {
        country: { type: String },
        city: { type: String },
        province: { type: String },
        address: { type: String },
        lat: { type: Number },
        lng: { type: Number },
    },
    images: [{ type: String }],
    activities: [{ type: String }],
    category: { type: String },
    reviews: [{ 
        user: { type: String },
        text: { type: String },
        photos: [{ type: String }]
     }],
     status: { type: String }
} , { 
    versionKey: false,
    timestamps: true
});