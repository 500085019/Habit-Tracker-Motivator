import {mongoose , Schema} from "mongoose";

const habitalSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        description: {
            type: String,
            required: true,
            trim: true, 
        },
        startTime: {
            type: Date,
            required: true,
            trim: true,

        }
    

    },
    {
        timestamps : true
    }
    )

export const habital = mongoose.model("habital", habitalSchema);