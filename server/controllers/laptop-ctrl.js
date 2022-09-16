const Laptop = require('../models/laptop-model')

createLaptop = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a laptop',
        })
    }

    const laptop = new Laptop(body)

    if (!laptop) {
        return res.status(400).json({ success: false, error: err })
    }

    laptop
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: laptop._id,
                message: 'Laptop created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Laptop not created!',
            })
        })
}

updateLaptop = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Laptop.findOne({ _id: req.params.id }, (err, laptop) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Laptop not found!',
            })
        }
        laptop.name = body.name
        laptop.time = body.time
        laptop.rating = body.rating
        laptop
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: laptop._id,
                    message: 'Laptop updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Laptop not updated!',
                })
            })
    })
}

deleteLaptop = async (req, res) => {
    await Laptop.findOneAndDelete({ _id: req.params.id }, (err, laptop) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!laptop) {
            return res
                .status(404)
                .json({ success: false, error: `Laptop not found` })
        }

        return res.status(200).json({ success: true, data: laptop })
    }).catch(err => console.log(err))
}

getLaptopById = async (req, res) => {
    await Laptop.findOne({ _id: req.params.id }, (err, laptop) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!laptop) {
            return res
                .status(404)
                .json({ success: false, error: `Laptop not found` })
        }
        return res.status(200).json({ success: true, data: laptop })
    }).catch(err => console.log(err))
}

getLaptops = async (req, res) => {
    await Laptop.find({}, (err, laptops) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!laptops.length) {
            return res
                .status(404)
                .json({ success: false, error: `Laptop not found` })
        }
        return res.status(200).json({ success: true, data: laptops })
    }).catch(err => console.log(err))
}

module.exports = {
    createLaptop,
    updateLaptop,
    deleteLaptop,
    getLaptops,
    getLaptopById,
}