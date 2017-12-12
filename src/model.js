'use strict';

const mongoose = require('mongoose'),
	config = require('./config');

mongoose.connect(`mongodb:\/\/${config.mongodb.host}/${config.mongodb.db}`);

module.exports = mongoose;