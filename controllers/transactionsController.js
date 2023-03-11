const mongoose = require('mongoose');

// I know companies is written wrong, but for the convesnion
const Transaction = mongoose.model('transactions');

exports.addTransaction = async (req, res) => {
  try {
    const { cost, company } = req.body;

    const transaction = new Transaction({
      cost,
      company,
    });
    const mysort = { createdAt: -1 };
    await transaction.save();
    const transactions = await Transaction.find({})
      .sort(mysort)
      .populate({
        path: 'company',
        model: 'companys',
        populate: {
          path: 'merchant',
        },
      });
    res.status(200).send({
      transactions,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: ' Internal Server Error', err });
  }
};
exports.getTransactions = async (req, res) => {
  try {
    const mysort = { createdAt: -1 };
    const transactions = await Transaction.find({})
      .sort(mysort)
      .populate({
        path: 'company',
        model: 'companys',
        populate: {
          path: 'merchant',
        },
      });
    res.status(200).send({
      transactions,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: ' Internal Server Error', err });
  }
};
