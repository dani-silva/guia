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

		conn.find({},{_id: false, content: false},(err, doc) => {

			//save titles in array
			let arraySearch = [];

			//recursive function, recive array with document
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

								if (item.index >= 0) {
									return {
										index: item.index,
										title: item.title,
										subItems: subArrayDoc
									}
								} else {
									return {
										title: item.title,
										subItems: subArrayDoc
									}
								}
							} else {

								if (item.index >= 0) {
									return {
										index: item.index,
										title: item.title
									}
								} else {
									return {
										title: item.title
									}
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

			let filterR = result.filter(filterResult);

			let orderResult = filterR.sort((a, b) => {
				if (a.index > b.index) {
					return 1;
				}
				return -1;
			})

			res.json(orderResult)
				
		})
	})
	
	.get('/searchcontent/:title', (req, res) => {

		conn.findOne({"title": req.params.title},{_id: false, index: false, title: false, subItems: false}, (err, doc) => {

			if (doc) {
				
				res.json(doc);

			} else {
				res.json({
					content: 'Empty content'
				});
			}

		})
	})

	.listen(app.get('port'), () => console.log('servidor corriendo: ' + port));

