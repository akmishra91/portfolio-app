module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      // Optional: Add more fields such as tags, published_date, etc.
    });
  
    return Blog;
  };
  