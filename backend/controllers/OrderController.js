const {
    Book,
    Order
} = require('../models/index')
const OrderController = {
    getAll(req, res) {
        Order.findAll({
                include: [Book]
            })
            .then(orders => res.send(orders));
    },
    async insert(req, res) {
        const order = await Order.create({
            fechaEntrega: req.body.fechaEntrega,
            status: 'pending'
        })
        req.body.books.forEach(book => {
            order.addBook(book.id, {
                through: {
                    units: book.units
                }
            });
        })
        res.status(201).send(order)
    }
}
module.exports = OrderController;