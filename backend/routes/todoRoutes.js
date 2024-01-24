const router = require('express').Router();
const todoController = require('../controllers/todoControllers');

router.get('/',todoController.todo_show);

router.post('/', todoController.todo_post);

router.delete('/', todoController.todo_delete);

module.exports = router