const {client} = require("pg");

const client = new client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"test@123",
    database:"demo"
})

client.connect();

client.query("select * from users", (err, result) =>{
    if(!err){
        console.log(result.rows);
    }
    client.end();
})