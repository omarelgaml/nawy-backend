const mongoose = require('mongoose');

const { Schema } = mongoose;

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  cost: Number,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'companys' },
});

// Export function to create "SomeModel" model class

mongoose.model('transactions', TransactionSchema);
