var mariadb = require("mariadb")
var pool = 
	mariadb.createPool({
		host: "127.0.0.1",
		port: 3306,
		user: "mansys",
		password: "pass",
		database: "man_sys_db"
	});

module.exports = Object.freeze({
	pool: pool
});
