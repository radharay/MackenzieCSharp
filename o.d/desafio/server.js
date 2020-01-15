const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://crud-desafio:ramper@mongo01-shard-00-00-dobaq.mongodb.net:27017/book?ssl=true&authSource=admin', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const MongoClient = require('mongodb').MongoClient;

//const uri =("mongodb://crud-desafio:ramper@mongo01-shard-00-00-dobaq.mongodb.net:27017/book?ssl=true&authSource=admin", {useNewUrlParser: true })

MongoClient.connect("mongodb://crud-desafio:ramper@mongo01-shard-00-00-dobaq.mongodb.net:27017/book?ssl=true&authSource=admin", {useNewUrlParser: true },(err, client) => {
  if (err) return console.log(err)
  db = client.db('book')

  //app.listen(4200, () =>  {
      //console;log("server na porta 4200")

   //})
})

app.use(bodyParser.urlencoded({ extended: true}))

app.set('view engine', 'ejs')

app.listen(4200, function(){
    console.log('Hey, port 3000')
})

app.get('/', (req,res) =>{
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    db.collection('listbook').save(req.body,( err, result)=>{
        if(err) return console.log(err)
    })
    console.log('Salvo')
    res.redirect('/')
    db.collection('listbook').find().toArray((err, results) =>{
        console.log(results)
    })
})

app.get('/', (req, res) => {
    let cursor = db.collection('listbook').find()
})

app.get('/show', (req, res) => {
    db.collection('listbook').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })

    })
})

app.post('/show', (req, res) => {
    db.collection('listbook').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Salvo no Banco de Dados')
        res.redirect('/show')
    })
})

app.route('/edit/:id')
.get((req, res) => {
    let id = req.params.id

    db.collection('listbook').find(Object(id)).toArray((err, result) =>{
        if(err) return res.send(err)
        res.render('edit.ejs', {data : result})
    
    })
})

.post((req, res) =>{
    let id = req.params.id
    let name = req.params.name
    let surname = req.params.surname

    db.collection('listbook').updateOne({id: Object(id)},{
        $set:{
            name: name,
            surname: surname
        }
    },(err, result) =>{
        if(err) return res.send(err)
        res.redirect('/show')
        console.log('Atualizado')
    })
})

app.route('/delete/:id')
.get((req, res) => {
  var id = req.params.id

  db.collection('listbook').deleteOne({id: Object(id)}, (err, result) => {
    if (err) return res.send(500, err)
    console.log('Deletado do Banco de Dados!')
    res.redirect('/show')
  })
})