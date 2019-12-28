const Order = require('../models/Order');
const Doner = require('../models/Doner');
module.exports = {
    getEdit: async (req, res) => {
        try {
            let orders = await Order.find().populate('product');



            orders.forEach((order) => {
                order.inPending = false;
                order.inProgres = false;
                order.inTransit = false;
                order.inDelivery = false;
                if (order.status === 'pending') {
                    order.inPending = true;
                } else if (order.status === 'inProgress') {
                    order.inProgres = true;
                } else if (order.status === 'inTransit') {
                    order.inTransit = true;
                } else if (order.status === 'delivered') {
                    order.inDelivery = true;
                }
            })

            res.render('products/edit', { orders });
        } catch (e) {
            console.log(e);
        }

    },
    postEdit: async (req, res) => {
        const data = req.body;

        try {
            for (let id in data) {
                let order = await Order.findById(id)

                order.status = data[id];

                await order.save();
            }

            res.redirect('/')
        } catch (e) {
            console.log(e);

        }

    },
    productDelete: async (req, res) => {
        try{
            let product = await Doner.findById(req.params.id);
           await product.remove();    
           res.redirect('/')     
        }catch(e){
            console.log(e);
            
        }
    }
}