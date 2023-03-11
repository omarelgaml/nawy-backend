const mongoose = require('mongoose');

const Merchant = mongoose.model('merchants');

exports.addMerchant = async (req, res) => {
  try {
    const { name } = req.body;
    const merchant = new Merchant({
      name,
    });
    await merchant.save();
    const merchants = await Merchant.find({});

    res.status(200).send({
      merchants,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: ' Internal Server Error', err });
  }
};
exports.getMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.find({});

    res.status(200).send({
      merchants,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: ' Internal Server Error', err });
  }
};
