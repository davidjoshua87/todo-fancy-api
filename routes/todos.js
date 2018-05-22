const express = require('express');
const todo = express.Router();
const {
  findAll,
  findById,
  create,
  update,
  remove,
  findAllByUserId
} = require('../controllers/todos.controller');
const {
  checkAuth
} = require('../middleware/checkAuth');

todo.get('/', checkAuth, findAll);
todo.get('/user/:user_id', checkAuth, findAllByUserId);
todo.post('/user/:user_id', checkAuth, create);
todo.get('/:id/', checkAuth, findById);
todo.put('/:id/', checkAuth, update);
todo.delete('/:id/', checkAuth, remove);

module.exports = todo;
