const mongoose = require("mongoose");

module.exports = mongoose.connect("mongodb+srv://joao:joao@cluster0.jlbcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Success conected mongodb");
}).catch((err)=>{
    console.log(`ERROR ${err}`);
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O value de'{VALUE}' é menor que '{min}'!"
mongoose.Error.messages.Number.max = "O value de'{VALUE}' é maior que '{max}'!"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'"