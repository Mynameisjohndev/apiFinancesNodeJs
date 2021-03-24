const express = require('express');
const server = express();
const alowcors = require('./cors')
const queryParser = require('express-query-int')
// const cors = require('cors');

// server.use((req, res, next)=>{
//    res.header("Access-Control-Allow-Origin", "*")
//    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS', 'PUT','PATCH', 'DELETE')
//    res.header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept')
//    server.use(cors());
//    next();
// })
server.use(alowcors)
server.use(queryParser())
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running in port  ${PORT}:)!`)
});

module.exports = server;