var exphbs = require('express-handlebars');

module.exports.SetupRouting = function (tv_app)
{
	tv_app.engine('handlebars', exphbs({
		defaultLayout: 'main', 
		layoutsDir: 'app/views/layouts'
	}));
	tv_app.set('view engine', 'handlebars');

	tv_app.get('/', function (req, res) {
		res.render('appviews/home/home');
	});
	tv_app.get('/config', function (req, res) {
		res.render('appviews/config/config');
	});
	tv_app.get('/catan', function(req, res) {
		res.render('gameviews/catan/catan');
	});
}