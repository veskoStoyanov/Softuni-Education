const models = require('../models');

module.exports = {
    get: {
        getAll: async (req, res, next) => {
            try {
                let contacts = await models.Contact.find();
                res.send(contacts)
            } catch (e) {
                console.log(e);

            }
        },

        getOne: async (req, res, next) => {
            const id = req.params.id;


            try {
                let contact = await models.Contact.findById(id);
                res.send(contact);
            } catch (e) {
                console.log(e);

            }
        }
    },

    post: async (req, res, next) => {
        let { username, receiver, message, subject } = req.body;

        let user = await models.User.findOne({
            username: receiver
        });
       
        if(user) {             
            try {

                let contact = await models.Contact.create({
                    receiver,
                    username,
                    message,
                    subject
                });
    
                res.send({ contact, success: true })
            } catch (e) {
                res.send({ success: false })
                console.log(e);
    
            }
        }else {
            res.send({ success: false, error:'There are no such User!' })
            console.log(e);
        }
    },

    put: async (req, res, next) => {
        try {
            const { contactId } = req.body;

            let contact = await models.Contact.findById(contactId);

            contact.isRecent = false;
            await contact.save();
            res.send({ contact, success: true })
        } catch (e) {
            res.send({ success: false })
            console.log(e);
        }
    },

    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            let contact = await models.Contact.deleteOne({ _id: id });
            res.send({ contact, success: true });
        } catch (e) {
            console.log(e);

        }
    }
}