const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const CONNECTION_URL = "mongodb+srv://khasim:12345@cluster0-mglvd.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "backend";


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.get("/users", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.post('/login', (req, res) => {
  return res.send('Received a POST HTTP method');
});

var database, collection;

app.listen(1330, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("users");
        console.log("Connected to '" + DATABASE_NAME + "'!");
    });
});
