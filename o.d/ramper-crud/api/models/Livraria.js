const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Livraria = new Schema({
  livro_name: {
    type: String
  },
  autor_name: {
    type: String
  },
  valor_number: {
    type: Number
  }
},{
    collection: 'livraria'
});

module.exports = mongoose.model('Livraria', Livraria);