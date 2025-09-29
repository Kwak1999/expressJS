const express = require('express');
const postController = require('../controller/posts.controller');
const postRouter = express.Router();

postRouter.get('/', postController.getPost);

module.exports = postRouter;