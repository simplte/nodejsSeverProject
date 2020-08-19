const { Router } = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const helmet = require('helmet');
const sessionMiddleware = require('./session');
const urlnormalizeMiddleware = require('./urlnamelize');
const loginMiddleware = require('./login');
const authMiddleware = require('./auth');
const traceMiddleware = require('./trace');
const { sessionCookieSecret } = require('../config');

// const secret = '842d918ced1888c65a650f993077c3d36b8f114d';

module.exports = async function initMiddlewares() {
  const router = Router();
  router.use(traceMiddleware());
  router.use(helmet());
  router.use(urlnormalizeMiddleware());
  router.use(cookieParser(sessionCookieSecret));
  router.use(sessionMiddleware());
  router.use(loginMiddleware());
  router.use(authMiddleware());
//   给req添加csrfToken 方法
  router.use(bodyParser.urlencoded({ extended: false }), csurf());
  return router;
};
