"use restrict"
const knex = require('./db_connection.js');

if (!process.argv[3]){
	console.log("Usage: node hello-node3.js <id> <changed name>");
	process.exit(0);
}


let id = process.argv[2];
let name = process.argv[3];

knex("invited").update({
	invited_name:name
}).where({
	invited_id:id
}).then((ret)=>{
	console.log(`The user with id ${id} had been updated`);
	process.exit(0);
}).catch((err)=>{
	console.log(err);
	process.exit(1);
});