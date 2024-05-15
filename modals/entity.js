module.exports = (sequelize, Sequelize) => {
  const Entity = sequelize.define('Entity', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobileNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      type: Sequelize.DATEONLY, 
      allowNull: true
    }
  });

  return Entity;
};
