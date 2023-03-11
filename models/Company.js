const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompanySchema = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },

  merchant: { type: mongoose.Schema.Types.ObjectId, ref: 'merchants' },
});

// Export function to create "SomeModel" model class
// I know that this is typo, bur for the convension

mongoose.model('companys', CompanySchema);
