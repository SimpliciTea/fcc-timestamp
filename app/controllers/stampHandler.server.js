'use strict';

var moment = require('moment');

function stampHandler () {

	this.parseStamp = function(req, res) {
		var date = decodeURIComponent(req.url.slice(1));
		var result = {
			"unix": null,
			"natural": null
		}


		// check for nat lang or unix stamp
		// ... if either, updates result
		if (isNaN(date) && moment(date, 'MMMM DD, YYYY', true).isValid()) {
			result.natural = date;
			result.unix = moment(date).unix();
		} else if (!isNaN(parseInt(date))) {
			result.unix = date;
			result.natural = moment.unix(date).format('MMMM DD, YYYY');
		}
		// if neither, remains nulls


		res.send(result);
	};
}


module.exports = stampHandler;