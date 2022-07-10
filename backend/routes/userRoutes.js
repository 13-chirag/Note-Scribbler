const express = require('express');
const { registerUser, authUser } = require('../controllers/userControllers')

//importing router from express
const router = express.Router();

//first route
//to store(send) data in backend thus post request
router.route('/').post(registerUser);
router.route('/login').post(authUser);


module.exports = router;