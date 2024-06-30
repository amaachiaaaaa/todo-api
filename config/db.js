import mongoose from "mongoose";
import 'dotenv/config'





export const dbConnection = () => {
    mongoose.connect(mongoUrl).then(() => {
        console.log('database is connected')
    })
};


