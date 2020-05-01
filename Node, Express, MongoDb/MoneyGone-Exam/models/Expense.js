const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    merchant: { type: mongoose.Schema.Types.String, required: true },
    date: { type: mongoose.Schema.Types.Date, default: Date.now },
    total: { type: mongoose.Schema.Types.Number, required: true },
    category: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String, minlength: 10, maxlength: 50, required: true },
    report: { type: mongoose.Schema.Types.Boolean, default: false, default: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;