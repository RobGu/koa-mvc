const router = require('koa-router')()

import fs from 'fs';
import index from './html/index'
import path from 'path'
import users from './api/users'

for (const file of fs.readdirSync(path.resolve(__dirname, 'html'))) {
  const route = require(path.resolve(__dirname, 'html', file))
  router.use('',route.routes(),route.allowedMethods())
}

for (const file of fs.readdirSync(path.resolve(__dirname, 'api'))) {
  const route = require(path.resolve(__dirname, 'api', file))
  router.use('',route.routes(),route.allowedMethods())
}

export default router
