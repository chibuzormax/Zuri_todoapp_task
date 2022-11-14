const router = require('express').Router();
const controller = require('../controller/todoController');

router
    .get('/', controller.getAllTodos)
    .get('/:id', controller.getSingleTodo)
    .post('/', controller.createNewTodo)
    .put('/:id', controller.updateTodoTask)
    .delete('/:id', controller.deleteTodoItem)

module.exports = router;