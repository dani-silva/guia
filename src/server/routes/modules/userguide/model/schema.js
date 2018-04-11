'use strict';

const config = require('./config');

const mongoose = require('./model'),
	Schema = mongoose.Schema,
	DefaultSchema = new Schema(
		{
			_id: Schema.Types.ObjectId,
			index: Number,
			title: String,
			content: String,
			subItems: Array
		},
		{
			collection: config.mongodb.collection
		}
	),
	Data = mongoose.model('Data', DefaultSchema);

module.exports = Data;