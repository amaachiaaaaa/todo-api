import { todoModel } from "../models/todo_models.js";

export const addTask = async (req, res) => {

    try {
        console.log('request', req.body)
        const addData = await todoModel.create(req.body);
        res.send(req.body);

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
        const Task = await todoModel.findById (req.params.id)
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
        const newData = req.body;
        console.log('request', req.body);
        const updateData = await todoModel.findByIdAndUpdate(req.params.id, newData, {new:true});
         res.status(200).send(updateData)
        
    } catch (error) {
        console.log(error)
    }

};


// delete a Task

export const deleteTask = async (req, res, next) => {
    try {
        const deleteData = await todoModel.findByIdAndDelete(req.params.id);
        
            res.status(200).send('Task has been deleted')
        
    } catch (error) {
        console.log(error)
    }

}