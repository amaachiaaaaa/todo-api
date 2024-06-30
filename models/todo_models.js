import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    taskid: { type: String },
    name: { type: String },
    taskType: { type: String, enum: ['Morning', 'Afternoon', 'Evening'] },
    taskStatus: { type: String, enum: ['complete', 'incomplete',] },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },

});

export const todoModel = model("todo", todoSchema);