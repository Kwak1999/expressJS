const express = require('express');
const userController = require('../controller/users_Controller');
const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:userId', userController.getUser);
userRouter.post('/', userController.postUser)

module.exports = userRouter;