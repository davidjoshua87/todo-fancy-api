const express = require('express');
const user = express.Router();
const {
  signIn,
  signUp,
  signInFb,
  findAll,
  remove
} = require('../controllers/users.controller');

user.get('/', findAll);
user.post('/signup', signUp);
user.post('/signin', signIn);
user.post('/signinfb', signInFb);
user.delete('/:id', remove);

module.exports = user;
