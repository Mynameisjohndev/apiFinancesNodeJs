const _ = require('lodash');
const billingCycle = require('../billingCycle/billingCycle');

function getSummary(req, res) {
    billingCycle.aggregate([{
        $project: { creditos: { $sum: "$creditos.value" }, debitos: { $sum: "$debitos.value" } }
    }, {
        $group: { _id: null, creditos: { $sum: "$creditos" }, debitos: { $sum: "$debitos" } }
    }, {
        $project: { _id: 0, creditos: 1, debitos: 1 }
    }], function(error, result) {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json(_.defaults(result[0], { creditos: 0, debitos: 0 }))
        }
    })
}

module.exports = { getSummary }