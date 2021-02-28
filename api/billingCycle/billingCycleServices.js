const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

//POR SER REAT-FUL UTILIZASSE A CONTAGEM PELO DOCUMENTO DO MONGOOSE
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.countDocuments(function(error, value) {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
});


module.exports = BillingCycle