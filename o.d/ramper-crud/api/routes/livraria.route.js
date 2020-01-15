const express = require('express');
const app = express();
const livrariaRoutes = express.Router();

// Require Business model in our routes module
let Livraria = require('../models/Livraria');

// Defined store route
livrariaRoutes.route('/add').post(function (req, res) {
  let livraria = new livraria(req.body);
  livraria.save()
    .then(livraria => {
      res.status(200).json({'livraria': 'livro in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
livrariaRoutes.route('/').get(function (req, res) {
    Livraria.find(function (err, livraria){
    if(err){
      console.log(err);
    }
    else {
      res.json(livraria);
    }
  });
});

// Defined edit route
livrariaRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Livraria.findById(id, function (err, livraria){
      res.json(livraria);
  });
});

//  Defined update route
livrariaRoutes.route('/update/:id').post(function (req, res) {
    livraria.findById(req.params.id, function(err, next, livraria) {
    if (!livraria)
      return next(new Error('Could not load Document'));
    else {
        livraria.livro_name = req.body.livro_name;
        livraria.autor_name = req.body.autor_name;
        livraria.valor_number = req.body.valor_number;

        livraria.save().then(livraria => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
livrariaRoutes.route('/delete/:id').get(function (req, res) {
    livraria.findByIdAndRemove({_id: req.params.id}, function(err, livraria){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = livrariaRoutes;