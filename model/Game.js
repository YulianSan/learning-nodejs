const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    deleted: {
        require: false,
        type: Date
    },
    // id do usuário
    author_id: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
},{timestamps: true});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;