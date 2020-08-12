// yarn sequelize model:generate --name Shop --attributes name:string
/**
 *  生成店铺 model 文件与 schema 迁移文件
 * 通过上述命令生成的shop实体 表结构
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shop', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shop');
  },
};
