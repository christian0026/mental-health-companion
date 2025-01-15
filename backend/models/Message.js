module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      sessionId: {
        type: DataTypes.INTEGER, // Assuming a foreign key
        references: {
          model: 'Sessions', // Refers to the 'Sessions' table
          key: 'id'
        },
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER, // Assuming a foreign key
        references: {
          model: 'Users', // Refers to the 'Users' table
          key: 'id'
        },
        allowNull: false
      },
      timeStamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      messageText: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    // Associations (if needed)
    Message.associate = (models) => {
      Message.belongsTo(models.Session, { foreignKey: 'sessionId' });
      Message.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Message;
  };
  