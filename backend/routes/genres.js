const router = require('express').Router();
const GenreController = require('../controllers/GenreController');

router.get('/',GenreController.getAll);
router.post('/',GenreController.insert);
// router.put('/',GenreController.update);
// router.delete('/',GenreController.delete);

module.exports = router;