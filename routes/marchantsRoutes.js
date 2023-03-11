const router = require('express').Router();

const merchantsController = require('../controllers/merchantsController');

router.post('/add-merchant', merchantsController.addMerchant);
router.get('/get-merchants', merchantsController.getMerchants);

module.exports = router;
