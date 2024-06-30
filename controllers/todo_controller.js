import { todoModel } from "../models/todo_models.js";

export const addTask = async (req, res) => {

    try {
        console.log('request', req.body)
        const addData = await todoModel.create(req.body);
        res.send("Task Added");

    } catch (error) {
        console.log(error)
    }

};

// Get all Tasks
export const getTasks = async (req, res, next) => {
    try {
        const getData = await todoModel.find()
        {
            res.status(200).json(getData)
        }
    } catch (error) {
        console.log(error)
    }
};

// Get A Single Task
export const getTask = async (req, res, next) => {
    try {
        const Task = await todoModel.findById(taskid)
        {
            res.status(200).send(Task)
        }
    } catch (error) {
        console.log(error)
    }
};

// Update a Task
export const updateTask = async (req, res, next) => {
    try {
        const status = req.params.todoStatus;
        console.log(status)
        const updateData = await todoModel.findByIdandUpdate(req.params.id, { todoStatus: status })
        {
            res.status(200).json(updateData)
        }
    } catch (error) {
        console.log(error)
    }

};


// delete a Task

export const deleteTask = async (req, res, next) => {
    try {
        const deleteData = await todoModel.findByIdandDelete(req.params.id)
        {
            res.status(200).send(deletedTask)
        }
    } catch (error) {
        console.log(error)
    }

}