const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./modals');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const entityRoutes = require('./routes/entityRoutes');
app.use('/api', entityRoutes);

// Sync database and start server
db.sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
});
