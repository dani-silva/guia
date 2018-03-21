const express = require('express'),
	app = express(),
	routers = require('./src/server/routes/modules/userguide/userguide'),
	path = require('path'),
	dist = express.static(path.join(__dirname, '/src/server/static')),
	distApp = express.static(path.join(__dirname, '/dist')),
	publicDir = __dirname + '/src/server/views',
	port = (process.env.PORT || 3000);

//let data = require('./src/data.json');

app
	.set('port', port)
	.set('views', publicDir)
	.set('view engine', 'ejs')
	.use(dist)
	.use(distApp)

	.use('/', routers)

	.listen(app.get('port'), () => console.log('servidor corriendo: ' + port));

