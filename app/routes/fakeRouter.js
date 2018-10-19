var path = require('path');

module.exports.SetupRouting = function (an_app)
{
	an_app.set('view engine', 'html');

	// For fake client only
	var newPath = path.join(__dirname, "../");
	console.log(newPath);

	var fullPath = path.join(newPath, 'views/appviews/fake/FakeClient.html');

	an_app.get('/', function (req, res) {
		res.sendFile(fullPath);
	});
}