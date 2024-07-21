module.exports = (sequelize, DataTypes) => {
    const Portfolio = sequelize.define('Portfolio', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      // Optional: Add more fields such as project_link, technologies_used, etc.
    });
  
    return Portfolio;
  };
  