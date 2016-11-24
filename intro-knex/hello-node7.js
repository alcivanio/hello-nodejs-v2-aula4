const knex = require("./db_connection");

if (!process.argv[3]){
	console.log("Usage: node hello-node7.js <id> <nome>");
	process.exit(0);
}

let q = "";