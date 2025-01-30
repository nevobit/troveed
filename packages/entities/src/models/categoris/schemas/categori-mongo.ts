import { Schema } from 'mongoose';
import { Categori } from './categori';

export const CategoriSchemaMongo = new Schema<Categori>({
    name: { type: String },
    descripción: { type: String },
    icon: { type: String },
    image: { type: String },
});