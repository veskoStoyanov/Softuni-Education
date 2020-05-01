const Expense = require('../models/Expense');

module.exports = {
    getCreate: (req, res) => {
        res.render('expenses/create');
    },
    postCreate: async (req, res) => {
        try {
            let dataExpense = req.body;

            if (dataExpense.merchant.length < 4) {
                errorHandler('The merchant should be at least 4 characters long');
                return;
            }

            if (+dataExpense.total < 0) {
                errorHandler('The total should be positive number');
                return;
            }

            if (dataExpense.description.length < 10 || dataExpense.description.length > 50) {
                errorHandler('The description should be minimum 10 characters long and 50 characters maximum');
                return;
            }

            let expense = await Expense.create({
                merchant: dataExpense.merchant,
                total: dataExpense.total,
                category: dataExpense.category,
                description: dataExpense.description,
                report: dataExpense.report === 'on',
                creator: req.user._id
            });

            req.user.amount -= +dataExpense.total;
            if (req.user.amount < 0) {
                req.user.amount = 0
            }
            req.user.expenses.push(expense._id);
            await req.user.save();

            res.redirect('/');
        } catch (e) {
            console.log(e);

        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('expenses/create');
        }
    },
    report: async (req, res) => {
        try {
            let expense = await Expense.findById(req.params.id);
            res.render('expenses/report', expense);
        } catch (e) {
            console.log(e);

        }
    },
    remove: async (req, res) => {
        try {
            let expense = await Expense.findById(req.params.id);

            let index = req.user.expenses.indexOf(req.params.id);


            req.user.expenses.splice(index, 1);
            
            await req.user.save();

            await Expense.findByIdAndRemove(req.params.id)

            res.redirect('/');
        } catch (e) {
            console.log(e);

        }
    }
}