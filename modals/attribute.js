module.exports = (sequelize, Sequelize) => {
    const Attribute = sequelize.define('Attribute', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Attribute;
  };
  