import express from "express";
import { todoRouter } from "./routes/todoRouter.js";
import { dbConnection } from "./config/db.js";
 

// create express app
const app = express()

app.use(express.json());

dbConnection();

app.use(todoRouter);




// listening for incoming requests
const port = 8000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});