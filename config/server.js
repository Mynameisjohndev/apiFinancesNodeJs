const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const server = express()

//require('../api/billingCycle/billingCycle');
//const BS = mongoose.model('billingCycle');

server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json());

// server.get('/teste', (req, res) => {
//     BS.find().lean().then((bs)=>{
//         res.send(bs)
//     }).catch((err)=>{
//         res.send("Error" + err)
//     });
// });

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running in port  ${PORT}:)!`)
});

module.exports = server;