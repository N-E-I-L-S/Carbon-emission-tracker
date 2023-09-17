const mongoose = require('mongoose');
const { Schema } = mongoose;

const DataSchema = new Schema({
        username: {
            type: String,
            required: true
        },
        emission:{
            type: Number,
            required: true
        }
});
module.exports = mongoose.model('datas', DataSchema)