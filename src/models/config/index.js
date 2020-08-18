// module.exports = {
//   development: {
//     dialect: 'sqlite',
//     storage: 'database/index.db',
//     define: {
//       underscored: true,
//     },
//     migrationStorageTableName: 'sequelize_meta',
//   },
// };
const { db } = require('../../config');
module.exports = { [process.env.NODE_ENV || 'development']: db };