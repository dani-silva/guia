'use strict';

const mongoose = require('mongoose'),
	config = require('config').mongo;

mongoose.connect(config.url,
		{
			useMongoClient: true
		});

module.exports = mongoose;