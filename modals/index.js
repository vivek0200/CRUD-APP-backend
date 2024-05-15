const Sequelize = require('sequelize');
const sequelize = new Sequelize('CRUD', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  database: 'crud'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Entity = require('./entity')(sequelize, Sequelize);
// db.Attribute = require('./attribute')(sequelize, Sequelize);

// Associations
// db.Entity.hasMany(db.Attribute);
// db.Attribute.belongsTo(db.Entity);

module.exports = db;
