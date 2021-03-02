const restful = require('node-restful');
const mongoose = restful.mongoose;

const User = new mongoose.Schema({
    name: {type: String, required: true}
})

const CreditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
        min: 0,
    }
});

const DebitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
        min: 0,
    },
    status: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    },
});

const BillingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    month: {
        type: Number,
        required: true,
        min: 1,
        max: 12
    },
    year: {
        type: Number,
        required: true,
        min: 1970,
        max: 2100
    },
    creditos: [CreditSchema],
    debitos: [DebitSchema] 
});


module.exports = restful.model("billingCycle", BillingCycleSchema);