const { Router } = require('express');
const usersRouter = Router();
const usersController = require('../controller/usersController');

usersRouter.route('/')
    .get(usersController.usersListGet);

usersRouter.route('/create')
    .get(usersController.usersCreateGet)
    .post(usersController.usersCreatePost);

usersRouter.route('/:id/update')
    .get(usersController.usersUpdateGet)
    .post(usersController.usersUpdatePost);

usersRouter.route('/:id/delete')
    .post(usersController.usersDeletePost);

usersRouter.route('/search')
    .get(usersController.usersSearchGet);

module.exports = usersRouter;