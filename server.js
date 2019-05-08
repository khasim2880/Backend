const express = require("express");
const app = express();
const BodyParser = require("body-parser");

const connection = require('./db_connection/connect');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get("/users", require("./modules/getAllUsers"));
app.post('/login', require("./modules/login"));

app.listen(1330, () => {
    connection.connect();
});
