const express = require('express'),
	app = express(),
	path = require('path'),
	conn = require('./src/schema'),
	publicDir = express.static(path.join(__dirname, 'public')),
	port = (process.env.PORT || 3000);

let data = require('./src/data.json');

app
	.set('port', port)

	.use(publicDir)

	.get('/', (req, res) => res.render('index'))
	.post('/guide', (req, res) => {

		conn.find((err, doc) => {
			console.log(doc)
			res.json(doc)

		})
	})

	.listen(app.get('port'), () => console.log('servidor corriendo: ' + port));

