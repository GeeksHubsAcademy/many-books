const router = require('express').Router();
const BookController = require('../controllers/BookController');

router.get('/',BookController.getAll);
router.get('/:id',BookController.getOne);
router.get('/name/:name',BookController.getOneByName);
router.post('/',BookController.insert);
// router.put('/:id',BookController.update);
router.delete('/:id',BookController.delete);

module.exports = router;