const { normalize } = require('path');
const { parse, format } = require('url');

module.exports = function urlnormalizeMiddleware() {
	return function(req, res, next) {
		const pathname = normalize(req.path)
			.split('\\')
			.join('/');
		const urlParsed = parse(req.url);
		let shouldRedirect = false;
		if (req.path !== pathname) {
			urlParsed.pathname = pathname;
			shouldRedirect = true;
		}
		if (shouldRedirect) {
			res.redirect(format(urlParsed));
		} else {
			next();
		}
	};
};
