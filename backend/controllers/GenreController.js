const { Book, Genre } =require('../models/index')
const GenreController ={
    getAll(req,res){
        Genre.findAll({
            include:[Book]
        })
        .then(genres=>res.send(genres));
    },
    insert(req,res){
        Genre.create({...req.body})
        .then(genre=> res.status(201).send(genre));
    }
}
module.exports = GenreController;