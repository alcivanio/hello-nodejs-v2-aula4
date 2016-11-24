"USE STRICT"

const knex = require("./db_connection");

knex("invited").select().then(function(ret){

	console.log("ID\t\tName");
	let number = ret.length;

	while(number--){
		let invited = ret[number];
		console.log(`${invited.invited_id}\t\t${invited.invited_name}`);
	}
	process.exit(0);
});