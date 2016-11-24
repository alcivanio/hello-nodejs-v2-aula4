const knex = require("./db_connection");

if (!process.argv[2]){
	console.log("Usage: node hello-node3.js <id to be selected>");
	process.exit(0);
}

let id = process.argv[2]

knex("invited").select().where({
	invited_id:id
}).then((ret)=>{
	console.log("ID\t\tNAME");

	let size = ret.length;
	while(size--){
		let invited = ret[size];
		console.log(`${invited.invited_id}\t\t${invited.invited_name}`);	
	}
	process.exit(0);
});