const mysql=require('mysql');

//creating connection with database
const dbConn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bookings'
})
//checking connection is created or not
dbConn.connect(function(error){
    if(error)
    {
        throw error;
    }
    console.log("Scusessfully connected to db!");
});

module.exports= dbConn;