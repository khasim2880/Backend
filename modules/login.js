const connection = require('../db_connection/connect');
const config = require('../config.json');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    connection.database().collection("users").find({"username":req.body.username, "password":req.body.password}).toArray((error, user) => {
        if(error) {
            return res.status(401).send(error);
        }
        const token = jwt.sign({ sub: user[0].id }, config.secret);
        const { password, ...userWithoutPassword } = user[0];
        /*res.send({
            ...userWithoutPassword,
            token
        });*/
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
              return res.json({
                success: false,
                message: 'Token is not valid'
              });
            } else {
              console.log(decoded);
              next();
            }
          });
    });
}