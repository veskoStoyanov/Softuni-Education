const Cub = require('../models/Cub');

function handleError(err, res, data) {
    let errors = [];

    for (const prop in err.errors) {
        errors.push(err.errors[prop].message)
    }

    console.log(errors);
    res.locals.globalErrors = errors;
    res.render('cubs/create', data)
    

}

module.exports = {
    getCreate: (req, res) => {
        res.render('cubs/create')
    },
    postCreate: (req, res) => {
        let data = req.body;
        data.difficulty = Number(data.difficulty);

        Cub.create({
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            difficulty: data.difficulty
        }).then(function () {

            res.redirect('/')

        }).catch(function (e) {
            handleError(e, res, data);

        })
    },
    details: (req, res) => {
        let id = req.params.cubId;

        Cub.findById(id)
        .then((cube) => {
            res.render('cubs/details', cube)
        })
       
        
    }
} 