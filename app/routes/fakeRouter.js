var exphbs = require('express-handlebars');

module.exports.SetupRouting = function (an_app)
{
	an_app.engine('handlebars', exphbs({
		defaultLayout: 'main', 
		layoutsDir: 'app/views/layouts'
	}));
	an_app.set('view engine', 'handlebars');

	// For fake client only
	an_app.get('/', function (req, res) {
		res.render('appviews/fake/FakeClient');
	});
}

// routes =======================================================================