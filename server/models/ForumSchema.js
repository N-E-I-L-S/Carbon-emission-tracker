const mongoose = require('mongoose');
const { Schema } = mongoose;

const ForumSchema = new Schema({
        username:{
            type: String,
            required :true,
        },
        chat:{
            type: String,
            required :true,
        },
        likes : {
            type: Number,
            required: false,
        }
});
module.exports = mongoose.model('forum', ForumSchema)