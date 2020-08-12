// yarn sequelize model:generate --name Shop --attributes name:string
/**
 * 通过上述命令生成的shop实体
 */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shop.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Shop',
      tableName: 'shop',
    }
  );
  return Shop;
};
