const fs = require('fs');

function readLogin (path, code) {
	fs.readFile(path, code, (err, data) => {
	  if (err) throw 'dont know format or path';
	  console.log(JSON.parse(data));
	});
}

module.exports = readLogin;

