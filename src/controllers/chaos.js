const { Router } = require('express');
const ASYNC_MS = 800;
const cc = require('../utils/cc');
/**
 * Express 可以自动捕获同步异常并通过 next 回调捕获异步异常，但是无法捕获在异步方法中直接抛出的异常。
 * 包裹在next()方法中无论是同步或者异步都能被捕获并处理
 */
class ChaosController {
	async init() {
		const router = Router();
		// 异常被捕获并处理
		router.get('/sync-error-handle', this.getSyncErrorHandle);
		// 异常被捕获并处理
		router.get('/sync-error-throw', this.getSyncErrorThrow);
		// 异常被捕获并处理
		router.get('/thunk-error-handle', this.getThunkErrorHandle);
		// 引起进程异常关闭
		router.get('/thunk-error-throw', this.getThunkErrorThrow);
		// 异常被捕获并处理
		router.get('/promise-error-handle', this.getPromiseErrorHandle);
		// 引起进程警告事件
        router.get('/promise-error-throw', this.getPromiseErrorThrow);
        // 解决promise中异常抛出，引起进程警告 使事件程序的状态变得非常可控了
		router.get('/promise-error-throw-with-catch', this.getPromiseErrorThrowWithCatch);
		return router;
	}
	getSyncErrorHandle = (req, res, next) => {
		next(new Error('Chaos test - sync error handle'));
	};

	getSyncErrorThrow = () => {
		throw new Error('Chaos test - sync error throw');
	};

	getThunkErrorHandle = (req, res, next) => {
		setTimeout(() => {
			next(new Error('Chaos test - thunk error handle'));
		}, ASYNC_MS);
	};

	getThunkErrorThrow = () => {
		setTimeout(() => {
			throw new Error('Chaos test - thunk error throw');
		}, ASYNC_MS);
	};

	getPromiseErrorHandle = async (req, res, next) => {
		await new Promise(r => setTimeout(r, ASYNC_MS));
		next(new Error('Chaos test - promise error handle'));
	};

	getPromiseErrorThrow = async (req, res, next) => {
		await new Promise(r => setTimeout(r, ASYNC_MS));
		throw new Error('Chaos test - promise error throw');
	};

    // 通过cc方法解决进程警告问题
	getPromiseErrorThrowWithCatch = cc(async (req, res, next) => {
		await new Promise(r => setTimeout(r, ASYNC_MS));
		throw new Error('Chaos test - promise error throw with catch');
	});
}

module.exports = async () => {
	const c = new ChaosController();
	return await c.init();
};
