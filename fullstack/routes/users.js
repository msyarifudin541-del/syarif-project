const express = require('express');
const router = express.Router();
const UsersModel = require('../models/users');

// routing endpoit users utama
router.get('/', async (req, res) => {
    const users = await UsersModel.findAll();
    res.status(200).json({
        data: 'backend 1',
        metadata: "test user endpoint"
    })
});

router.post('/', async (req, res) => {
    //nip, nama, password -->>>>>>>>>>>> Backend nagkep
    const { nip, nama, password } = req.body;

    const users = await UsersModel.create({
        nip, nama, password
    });    
    res.status(200).json({
        data: users,
        metadata: "test post user endpoint"
    })
}) ;

module.exports = router;