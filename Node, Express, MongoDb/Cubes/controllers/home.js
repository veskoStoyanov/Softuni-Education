const Cub = require('../models/Cub');

module.exports = {
    homeGet: (req, res) => {
        Cub.find({})
            .then((cubes) => {
                res.render('index', { cubes });
            }).catch((err) => {
                console.log(err);

            })
    },
    aboutGet: (req, res) => {
        res.render('about');
    },
    search: (req, res) => {
        let { name, from, to } = req.query;
        from = Number(from);
        to = Number(to);

        let errors = [];
        if (from < 1 || from > 6) {
            errors.push('To is the problem')
            res.render('index');
            return;
        }  

        Cub.find({})
        .where('difficulty')
        .gte(from)
        .lte(to)
        .then((cubes) => {
            const filtered = cubes.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))

            res.render('index', {cubes: filtered})
        }).catch((err) => {
            console.log(err);
            
        })

    }
}