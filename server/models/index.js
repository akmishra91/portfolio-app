const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');
const environment = process.env.NODE_ENV || 'development';
const configEnv = config[environment];

const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./User')(sequelize, DataTypes);
db.Blog = require('./Blog')(sequelize, DataTypes);
db.Portfolio = require('./Portfolio')(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Blog);
db.Blog.belongsTo(db.User);

db.User.hasMany(db.Portfolio);
db.Portfolio.belongsTo(db.User);

module.exports = db;
