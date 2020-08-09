const { Router } = require('express');
const urlnormalizeMiddleware = require('./urlnamelize');

module.exports = async function initMiddlewares() {
    const router = Router();
    router.use(urlnormalizeMiddleware());
    return router;
}