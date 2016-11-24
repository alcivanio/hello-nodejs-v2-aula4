const knex = require("./db_connection");

if (!process.argv[2]){
	console.log("Usage: node hello-node3.js <id to be deleted>");
	process.exit(0);
}

let id = process.argv[2]

knex("invited").del().where({
	inveted_id:id
}).then((ret)=>{
	console.log(`The user with id ${id} had been deleted`);
	process.exit(0);
}).catch((err)=>{
	console.log(err);
	process.exit(10);
});