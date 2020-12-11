const usersRouter = require('express').Router();
const { usersList, doesUserExist, createUser, updateUser, updateUserAvatar } = require('../controllers/users');

usersRouter.get('/users', usersList);
usersRouter.get('/users/:id', doesUserExist);
usersRouter.post('/users', createUser);
usersRouter.patch('/users/me', updateUser);
usersRouter.patch('/users/me/avatar', updateUserAvatar);


module.exports = usersRouter;
