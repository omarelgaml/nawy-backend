const router = require('express').Router();

const companiesController = require('../controllers/companiesController');

router.post('/add-company', companiesController.addCompany);
router.get('/get-companies', companiesController.getCompanies);
router.put('/update-company', companiesController.updateCompany);

module.exports = router;
