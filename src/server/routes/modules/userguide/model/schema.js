'use strict';

'use strict';

const mongoose = require('mongoose'),
	dbConfig = require('config').mongodb,
	mongoDBPath = `mongodb://${dbConfig.host}/${dbConfig.db}`;

mongoose.connect(mongoDBPath,
	{
		useMongoClient: true
	});


	var manPages = new mongoose.Schema(
		{
			_id: mongoose.Schema.Types.ObjectId,
			index: Number,
			title: String,
			content: String,
			subItems: Array
		},
		{
			collection: 'guide'
		}
	),
	Pages = mongoose.model('Data', manPages);

module.exports = Pages;