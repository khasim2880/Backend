const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = "mongodb+srv://khasim:12345@cluster0-mglvd.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "backend";
var db = null;

module.exports = {
    connect: () => {
        MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
            if(error) {
                throw error;
            }
            console.log("Connected to '" + DATABASE_NAME + "'!");
            db = client.db(DATABASE_NAME);
        });
    },
    database: () => {
        return db;
    }
}