var mysql = require('mysql');
var config = require('./config.json');

const connection = mysql.createConnection({
    host     : config.dbhost,
    user     : config.dbuser,
    password : config.dbpassword,
    database : config.dbname
});

exports.handler = (event, context, callback) => {

    insert(event, function (err, data) {
        var response = {
            "isBase64Encoded": false,
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                
            },
            "statusCode": 200,
            "body": "{\"result\": \"Success.\"}"
        };
        callback(err, response);
    });
};

function insert (event, done) {

    connection.query("INSERT INTO database.table (columns,) VALUES (" + connection.escape(event.values) + ");", function (error, results, fields) {
        if (error) {
            connection.destroy();
            throw error;
        } else {
            connection.end(function (err) { 
                callback(err, results, fields);
            });
        }
    });
}