module.exports = function () {

	var server = './app/';
	var config = {
		db: '',
		tests: './test/*.spec.js',
		server: server,
		nodeServer: server + 'server.js',
		defaultPort: 3000,
		testPort: 3001
	};

	return config;
}