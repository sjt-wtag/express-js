const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


app.use(cookieParser());

app.get("/", function(req, res){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash("habijabi", salt, function(err, hash) {
            console.log(hash)
        });
    });
})

// app.get("/read", function(req, res){
//     console.log(req.cookies);
//     res.send("read page");
// })

app.listen(3000);