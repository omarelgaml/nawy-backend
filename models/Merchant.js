const mongoose = require('mongoose');

const { Schema } = mongoose;

const MerchantSchema = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isBezos: Boolean,
});

// Export function to create "SomeModel" model class
mongoose.model('merchants', MerchantSchema);
