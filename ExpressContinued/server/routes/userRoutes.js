const express = require('express')
const {getAllUsers, creatAUser} = require('../controllers/userController');

const Router = express.Router()

Router.get('/', getAllUsers);
Router.post('/', creatAUser);

module.exports = Router;