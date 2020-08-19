// const memoryStorage = {
// 	'1001': { name: '良品铺子' },
// 	'1002': { name: '来伊份' },
// 	'1003': { name: '三只松鼠' },
// 	'1004': { name: '百草味' },
// 	'1005': { name: '零食铺子' }
// };
// async function delay(ms = 200) {
// 	await new Promise(r => setTimeout(r, ms));
// }
const { Shop } = require('../models');
class ShopService {
	async init() {}

	async find({ id, pageIndex = 0, pageSize = 10 ,logging }) {
		// await delay();
		if (id) {
			// 过滤掉假值
			// [memoryStorage[id]].filter(function (x) { return Boolean(x); });
			// return [memoryStorage[id]].filter(Boolean);
			return [await Shop.findByPk(id, { logging })];
		}
		// return Object.keys(memoryStorage)
		// 	.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
		// 	.map(id => ({ id, ...memoryStorage[id] }));
		return await Shop.findAll({
		  offset: pageIndex * pageSize,
		  limit: pageSize,
		});
	}

	async modify({ id, values ,logging}) {
		// await delay();
		// const target = memoryStorage[id];
		const target = await Shop.findByPk(id);
		if (!target) {
			return null;
		}
		// return Object.assign(target, values);
	    Object.assign(target, values);
	    return await target.save({ logging });
	}

	async remove({ id , logging}) {
		// await delay();
		// const target = memoryStorage[id];
		const target = await Shop.findByPk(id);
		if (!target) {
			return false;
		}
		// return delete memoryStorage[id];
		return target.destroy({ logging });
	}

	async create({ values, logging }) {
		// await delay();
		// const id = String(1 + Object.keys(memoryStorage).reduce((m, id) => Math.max(m, id), -Infinity));
		// return { id, ...(memoryStorage[id] = values) };
		return await Shop.create(values, { logging })
	}
}
// 单例模式
let service;
module.exports = async function() {
	if (!service) {
		service = new ShopService();
		await service.init();
	}
	return service;
};
