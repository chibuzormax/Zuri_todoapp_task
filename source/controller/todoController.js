const Todo = require('../model/Todo');

// Getting all the todo items

exports.getAllTodos = async (req, res) => {
    try {
        let todos = await Todo.find();
        if (todos.length === 0) {
             return res.status(404).json({
                success: false,
                message: 'No todo item found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Todo items found',
            todos,
            count: todos.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Getting single todo item

exports.getSingleTodo = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let todo = await Todo.findOne(id);
        if (!todo) 
        return res.status(404).json({
            success: false,
            message: 'Todo item not found'
        });
        res.status(200).json({
            success: true,
            message: 'Todo item found',
            todo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        })
    }
};

// Creating new todo item

exports.createNewTodo = async (req, res) => {
    try {
        let todo = await req.body;
        let created = await Todo.create(todo);
        if (!created) return res.status(400).json({
            success: false,
            message: 'Todo item not created'
        });
        return res.status(201).json({
            success: true,
            message: 'Todo item created',
            todo: created
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Updating a Particular Todo Task

exports.updateTodoTask = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let todo = await req.body;
        let updated = await Todo.updateOne(id, todo, { new: true });
        if (!updated) return res.status(400).json({
            success: false, 
            message: 'Failed to update todo item', 
            error: error.message
        });
        return res.status(200).json({
            success: true,
            message: 'Todo item updated Successfully',
            todo: updated
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        })
    }
};

// Deleting a todo item

exports.deleteTodoItem = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleted = await Todo.deleteOne(id);
        if (!deleted) 
        return res.status(400).json({
            success: false,
            message: 'Todo item not deleted'
        });
        return res.status(200).json({
            success: true,
            message: 'Todo item deleted'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        })
    }
};
