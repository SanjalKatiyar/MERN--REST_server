const express = require('express');
const cors = require('cors');
const app = express();

//whitelist contains all the origins server is willing to accept
<<<<<<< HEAD
var whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://LAPTOP-A7T3IMMU:3001'] ;
=======
var whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://localhost:4200']
>>>>>>> d08add7c785ad1f66d07b50dec90d191dc1b50a6
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);