'use strict'

var mongoose =  require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3999;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api-rest-node', { useNewUrlParser: true })
		.then(() => {
			console.log('La conexión a la base de datos se ha realizado correctamente.'),
			app.listen(port, () => {
				console.log('El servidor http://localhost:3999 está funcionando')
			});
		})
		.catch(error => console.log(error));