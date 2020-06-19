const Car = require('../models/Car');
const Rent = require('../models/Rent');

module.exports = {
    addGet: (req, res) => {
        res.render('car/add');
    },
    addPost: async (req, res) => {
        let carReq = req.body;
        carReq.pricePerDay = Number(carReq.pricePerDay);

        try {
            await Car.create({
                model: carReq.model,
                pricePerDay: carReq.pricePerDay,
                image: carReq.image,
                isRented: false
            }).then(() => {
                res.redirect('/')
            })
        } catch (e) {
            res.render('car/add', carReq)
        }
    },
    allCars: async (req, res) => {
        let cars = await Car.find({ isRented: false })
            .sort('-pricePerDay')

        res.render('car/all', { cars })
    },
    rentGet: async (req, res) => {
        const carId = req.params.id;

        let car = await Car.findById(carId);

        res.render('car/rent', car);

    },
    rentPost: async (req, res) => {
        const carId = req.params.id;
        const owner = req.user._id;
        const days = Number(req.body.days);

        try {
            const rent = await Rent.create({
                days,
                owner,
                car: carId
            })

            let car = await Car.findById(carId)
            car.isRented = true;
            req.user.rents.push(rent._id);
            await req.user.save()
            await car.save();

            res.redirect('/car/all')
        } catch (e) {
            console.log(e);
        }

    },
    editGet: async (req, res) => {
        let carId = req.params.id;
        try {
            let car = await Car.findById(carId)

            res.render('car/edit', car)
        } catch (e) {
            console.log(e);

        }


    },
    editPost: async (req, res) => {
        let carId = req.params.id;
        let carBody = req.body;

        try {
            let car = await Car.findById(carId)

            car.model = carBody.model;
            car.image = carBody.image;
            car.pricePerDay = carBody.pricePerDay;

           await car.save();

           res.redirect('/')

        } catch (e) {
            console.log(e);
        }
    },
}