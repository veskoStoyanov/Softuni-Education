const mongoose = require('mongoose');

const cubShema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required:true},
    description: { type: mongoose.Schema.Types.String, required:true },
    imageUrl: { type: mongoose.Schema.Types.String, required:true },
    difficulty: { type: mongoose.Schema.Types.Number, required:true }
})

cubShema.path('name')
    .validate(function () {
        return this.name.length >= 3 && this.name.length <= 15
    }, 'Problem name')

cubShema.path('description')
    .validate(function () {
        return this.description.length >= 20 && this.description.length <= 300
    }, 'Problem description')

cubShema.path('imageUrl')
    .validate(function () {
        return this.imageUrl.startsWith('http') && (this.imageUrl.endsWith('.jpg') || this.imageUrl.endsWith('.png'))
    }, 'Problem imageUrl')

cubShema.path('difficulty')
    .validate(function () {
        return this.difficulty >= 1 && this.difficulty <= 6
    }, 'Problem difficulty')


let Cub = new mongoose.model('Cub', cubShema)

module.exports = Cub;