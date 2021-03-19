const _ = require("lodash");
const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.after('post', sendMessageError).after('put',sendMessageError)

function sendMessageError(req, res, next){
    const bundle = res.locals.bundle;

    if(bundle.errors){
        var errors = parseErrors(bundle.errors);
        res.status(500).json(errors);
    }else{
        next()
    }
}

function parseErrors(nodeRestfulErrors){
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
}

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