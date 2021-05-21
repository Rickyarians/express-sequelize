var express = require('express');
var router = express.Router();
const todoController = require('./../controller/todo')


// route to get all todo
router.get('/', todoController.getAll)
router.get('/:id', todoController.getDetail)
router.delete('/:id', todoController.destroy)

module.exports = router;
