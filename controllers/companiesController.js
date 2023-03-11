const mongoose = require('mongoose');

// I know companies is written wrong, but for the convesnion
const Company = mongoose.model('companys');

exports.addCompany = async (req, res) => {
  try {
    const { name, merchant } = req.body;

    const company = new Company({
      name,
      merchant,
    });
    await company.save();
    const companies = await Company.find({}).populate('merchant');
    res.status(200).send({
      companies,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: ' Internal Server Error', err });
  }
};
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({}).populate('merchant');
    res.status(200).send({
      companies,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: ' Internal Server Error', err });
  }
};
exports.updateCompany = async (req, res) => {
  try {
    const { id, newMerchant } = req.body;
    await Company.findByIdAndUpdate(id, {
      merchant: newMerchant,
    });
    const companies = await Company.find({}).populate('merchant');
    res.status(200).send({
      companies,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: ' Internal Server Error', err });
  }
};
