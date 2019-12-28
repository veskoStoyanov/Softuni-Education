const Doner = require('../models/Doner');
const Order = require('../models/Order');

module.exports = {
    getCreate: (req, res) => {
        res.render('products/create');
    },
    postCreate: async (req, res) => {
        const data = req.body;

        data.category = data.category[0].toUpperCase() + data.category.slice(1);;

        try {
            await Doner.create({
                category: data.category,
                size: data.size,
                imageUrl: data.imageUrl,
                toppings: data.toppings.split(',')
            })

            res.redirect('/')
        } catch (e) {

            console.log(e);

        }
    },
    getOrder: async (req, res) => {
        let id = req.params.id;
        try {
            let doner = await Doner.findById(id);
            res.render('products/customize', { doner })
        } catch (e) {
            console.log(e);
        }
    },
    postOrder: async (req, res) => {
        const product = req.body;

        const toppings = Object.keys(product).filter((x) => {
            return x !== 'id'
        })

        try {
            await Order.create({
                creator: req.user._id,
                product: product.id,
                toppings
            })

            res.redirect('/')

        } catch (e) {
            console.log(e);
        }
    },
    orderStatus: async (req, res) => {

        try {
            let orders = await Order.find({
                creator: req.user._id
            }).populate('product');

            orders.map((o) => {
                return o.creationDate = o.creationDate.toLocaleString()
            })

            res.render('products/order-status', { orders });
        } catch (e) {
            console.log(e);

        }
    },
    orderDetails: async (req, res) => {

        try {
            let order = await Order.findById(req.params.id);
            let doner = await Doner.findById(order.product);

            let inProgres = false;
            let inTransit = false;
            let inDelivery = false;
            let inPending = false;
            if (order.status === 'Pending') {
                inPending = true;
            } else if (order.status === 'In Progress') {
                inProgres = true;
            } else if (order.status === 'In transit') {
                inTransit = true;
            } else if (order.status === 'Delivered') {
                inDelivery = true;
            }

            res.render('products/details', { order, doner, inProgres, inTransit, inDelivery, inPending })
        } catch (e) {
            console.log(e);

        }

    }
}