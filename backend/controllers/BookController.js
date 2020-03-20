const {
    Book,
    Genre,
    BookGenre,
    Sequelize,
    sequelize
} = require('../models/index');
const {
    Op
} = Sequelize;
const BookController = {
    getAll(req, res) {
        Book.findAll({
                include: [Genre]
            })
            .then(books => res.send(books))
    },
    getOne(req, res) {
        Book.findByPk(req.params.id, {
                include: [Genre]
            })
            .then(book => res.send(book))
    },
    getOneByName(req, res) {
        // sequelize.query(`SELECT * FROM books WHERE name LIKE '%${req.params.name}%'`)
        Book.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },
                include: [Genre]
            })
            .then(book => res.send(book))
    },
    insert(req, res) {
        Book.create({
                ...req.body
            })
            .then(book => {
                book.addGenre(req.body.genres);
                res.status(201).send(book)
            })
    },
    async delete(req, res) {
        await Book.destroy({
            where: {
                id: req.params.id
            }
        })
        await BookGenre.destroy({
            where: {
                BookId: req.params.id
            }
        })
        res.send({
            message: 'Libro eliminado correctamente'
        })
    }
}
module.exports = BookController;