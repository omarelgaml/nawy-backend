const router = require('express').Router();

const transactionsController = require('../controllers/transactionsController');

router.post('/add-transaction', transactionsController.addTransaction);
router.get('/get-transactions', transactionsController.getTransactions);

module.exports = router;
