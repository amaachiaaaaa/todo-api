import { Router } from "express";
import { addTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/todo_controller.js";

 export const todoRouter = Router()

todoRouter.post('/todo', addTask),

    todoRouter.get('/todo', getTasks),

    todoRouter.get('/todo/:id', getTask),

    todoRouter.patch('/todo/:id', updateTask),

    todoRouter.delete('/todo/:id', deleteTask)

    export default todoRouter; 




