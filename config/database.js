const mongoose = require("mongoose");

module.exports = mongoose.connect("mongodb://localhost/db_finance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O value de'{VALUE}' é menor que '{min}'!"
mongoose.Error.messages.Number.max = "O value de'{VALUE}' é maior que '{max}'!"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'"