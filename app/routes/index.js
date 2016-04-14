'use strict';

var path = process.cwd();
var StampHandler = require(path + '/app/controllers/stampHandler.server.js');

var stampHandler = new StampHandler();

module.exports = function (app) {
	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/:stamp')
		.get(stampHandler.parseStamp);
};