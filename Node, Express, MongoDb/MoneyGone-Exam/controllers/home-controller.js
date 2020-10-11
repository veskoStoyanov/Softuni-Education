const Expense = require('../models/Expense');

module.exports = {
    index: async (req, res) => {
        try{
            let expenses = [];
            if(req.user){
                for (const id of req.user.expenses) {
                   let ex = await Expense.findById(id)
                    expenses.push(ex)
                }
            }
           
            let isExpenses = expenses.length > 0;

            res.render('home/index', {expenses, isExpenses});
        }catch(e) {
            console.log(e);
            
        }
        
    }
};