'use strict';

const mongoose = require('./model'),
	Schema = mongoose.Schema,
	GuideSchema = new Schema(
		{
			_id: Schema.Types.ObjectId,
			index: Number,
			title: String,
			content: String,
			subItems: Array
		},
		{
			collection: 'guide'
		}
	),
	Guide = mongoose.model('Guide', GuideSchema);

module.exports = Guide;