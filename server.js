const express = require('express'),
	app = express(),
	routers = require('./src/server/routes/modules/userguide/userguide'),
	path = require('path'),
	publicDir = express.static(path.join(__dirname, 'dist')),
	port = (process.env.PORT || 3000);

//let data = require('./src/data.json');

app
	.set('port', port)

	.use(publicDir)

	.use('/', routers)

	.listen(app.get('port'), () => console.log('servidor corriendo: ' + port));

