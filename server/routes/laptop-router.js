const express = require('express')

const LaptopCtrl = require('../controllers/laptop-ctrl')

const router = express.Router()

router.post('/laptop', LaptopCtrl.createLaptop)
router.put('/laptop/:id', LaptopCtrl.updateLaptop)
router.delete('/laptop/:id', LaptopCtrl.deleteLaptop)
router.get('/laptop/:id', LaptopCtrl.getLaptopById)
router.get('/laptops', LaptopCtrl.getLaptops)

module.exports = router