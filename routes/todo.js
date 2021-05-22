var express = require('express');
var router = express.Router();
const todoController = require('./../controller/todo')
const {authorization} = require('./../middleware/authorization')

// route to get all todo
router.get('/', todoController.getAll)
// route get detail todo
router.get('/:id', todoController.getDetail)
// route delete todo
router.delete('/:id', authorization, todoController.destroy)
// route add todo base_url:3000/todo
router.post('/', authorization, todoController.create)
// route update todo
router.put('/', authorization, todoController.update)

module.exports = router;
