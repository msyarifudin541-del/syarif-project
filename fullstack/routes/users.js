const express = require('express');
const router = express.Router();
const UsersModel = require('../models/users'); 

// routing endpoit users utama
router.get('/', async (req, res) => {
    const users = await UsersModel.findAll();
    res.status(200).json({
        data: users,
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

router.put('/', async (req, res) => {
    //nip, nama, password -->>>>>>>>>>>> Backend nagkep
    const { nip, nama, password, passwordBaru } = req.body;

    const userData = await UsersModel.findOne({ where: { nip: nip } });

    //password yang muncul di db ==== password dari inputan
    if (userData.password === password) {

        const users = await UsersModel.update({
            nama, password: passwordBaru
        },   { where: { password: userData.password } });  
    
        res.json({
            users
        });

    }   else {
        res.json({
            error: " Data tidak ditemukan / password salah"
        })
    }  
})

module.exports = router;
