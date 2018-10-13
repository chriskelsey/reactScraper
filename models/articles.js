const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create our articles schema
const ArticleSchema = new Schema({

});

//Create our model for export
const Articles = mongoose.model('Articles', ArticleSchema);

module.exports = Articles;
