const express = require('express');
const postController = require('../controller/post_Controller');
const postRouter = express.Router();

postRouter.get('/', postController.getPost);

module.exports = postRouter;