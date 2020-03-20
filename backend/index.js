const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

const booksRouter =require('./routes/books.js');
const genresRouter =require('./routes/genres.js');
const ordersRouter =require('./routes/orders.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/books',booksRouter);
app.use('/genres',genresRouter);
app.use('/orders',ordersRouter);

app.listen(PORT,()=>console.log('server running on PORT '+PORT))