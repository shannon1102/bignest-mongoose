import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose"
import mongoose from 'mongoose';

@Schema()
export class Base extends Document {
    @Prop()
    createTime: Date;
    @Prop()
    editTime: Date;
}

export const BaseSchema = new mongoose.Schema({
    updateTime: { type: Date, required: false, default: Date.now },
    createTime: { type: Date, required: false, default: Date.now }
})
