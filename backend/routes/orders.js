const router = require('express').Router();
const OrderController = require('../controllers/OrderController');

router.get('/',OrderController.getAll);
router.post('/',OrderController.insert);

module.exports = router;