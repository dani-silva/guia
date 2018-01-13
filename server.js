const express = require('express'),
	app = express(),
	path = require('path'),
	conn = require('./src/schema'),
	publicDir = express.static(path.join(__dirname, 'public')),
	port = (process.env.PORT || 3000);

//let data = require('./src/data.json');

app
	.set('port', port)

	.use(publicDir)

	.get('/', (req, res) => res.render('index'))

	.get('/navguide', (req, res) => {

		conn.find({},{content: false},(err, doc) => {

			//save titles in array			
			let arraySearch = [];

			//recursive function, recive array with documents
			let arrayDoc = (doc) => {

				return (
					doc.map((item) => {

						//insert title of item on array of titles
						arraySearch.push(item.title);

						//filter function
						let filterSearch = (i) => {
							return item.title == i; 
						}

						// save titles of array variable
						let filter = arraySearch.filter(filterSearch);

						if (filter.length == 1) {

							if (item.subItems) {

								//recursive function
								let subArrayDoc = arrayDoc(item.subItems);

								return {
									title: item.title,
									subItems: subArrayDoc
								}

							} else {
								
								return {
									title: item.title
								}
							}

						} else {
							return null;
						}
					})
				)
			};

			let result = arrayDoc(doc);

			//filter results
			let filterResult = (r) => {
				return r != null;
			}

			res.json(result.filter(filterResult))
				
		})
		
	})
	
	.get('/searchcontent/:title', (req, res) => {

		conn.findOne({"title": req.params.title },{_id: false, title: false, subItems: false}, (err, doc) => {

			if (doc) {
				
				res.json(doc)

			} else {
				res.json({
					content: 'empty content'
				})
			}

		})
	})

	.listen(app.get('port'), () => console.log('servidor corriendo: ' + port));

