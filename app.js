const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database').connect();

require('./models/Merchant');
require('./models/Company');
require('./models/Transactions');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const port = 3000;

const marchantsRoutes = require('./routes/marchantsRoutes');
const companoesRoutes = require('./routes/companiesRoutes');
const tranactionsRoutes = require('./routes/transactionsRoutes');

app.use(
  cors({
    origin: 'http://localhost:8000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use('/api/marchants', marchantsRoutes);
app.use('/api/companies', companoesRoutes);
app.use('/api/transactions', tranactionsRoutes);

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
