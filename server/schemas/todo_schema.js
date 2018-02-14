var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connec = require('../db.js');

var todo_schema = new Schema({
    todo :{
    	type: String,
    	required: true,
    	trim: true
    },
    created_at :{
        type: Date,
        required: true,
        trim: true
    }
}); 

var todo_model = connec.model('todo', todo_schema);
module.exports = todo_model;