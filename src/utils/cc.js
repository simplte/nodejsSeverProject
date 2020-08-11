
// try catch   如果有问题使用 next包裹错误执行
module.exports = function callbackCatch(callback) {
	return async (req, res, next) => {
		try {
			await callback(req, res, next);
		} catch (e) {
			next(e);
		}
	};
};
