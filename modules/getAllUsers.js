const connection = require('../db_connection/connect');

module.exports = (req, res) => {
    connection.database().collection("users").find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
}