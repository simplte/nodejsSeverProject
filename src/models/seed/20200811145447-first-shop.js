/**
 * $ # 生成初始店铺 seed 文件 初始化数据
 * $ yarn sequelize seed:generate --name first-shop
 * 
 * $ yarn sequelize db:migrate       #向数据库写入表格结构
 * $ yarn sequelize db:seed:all     #向数据库写入初始数据
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shop', [
      { name: '良品铺子', created_at: new Date(), updated_at: new Date() },
      { name: '来伊份', created_at: new Date(), updated_at: new Date() },
      { name: '三只松鼠', created_at: new Date(), updated_at: new Date() },
      { name: '百草味', created_at: new Date(), updated_at: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('shop', null, {});
  },
};
