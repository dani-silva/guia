const express = require('express'),
	app = express(),
	path = require('path'),
	publicDir = express.static(path.join(__dirname, 'public')),
	port = (process.env.PORT || 3000);

app
	.set('port', port)

	.use(publicDir)

	.get('/', (req, res) => res.render('index'))

	.listen(app.get('port'), () => console.log('servidor corriendo: ' + port));

