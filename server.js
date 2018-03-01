const express = require('express'),
	app = express(),
	router = require('./routes'),
	path = require('path'),
	publicDir = express.static(path.join(__dirname, 'public')),
	port = (process.env.PORT || 3000);

//let data = require('./src/data.json');

app
	.set('port', port)

	.use(publicDir)

	.use('/', router.routes())

	.listen(app.get('port'), () => console.log('servidor corriendo: ' + port));

