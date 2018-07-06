import fs from 'fs';
import path from 'path'

import Router from 'koa-router'

import users from './api/users'
import index from './html/index'

const router = Router()

for (const file of fs.readdirSync(path.resolve(__dirname, 'html'))) {
  const route = require(path.resolve(__dirname, 'html', file)).default
  router.use('', route.routes(), route.allowedMethods())
}

for (const file of fs.readdirSync(path.resolve(__dirname, 'api'))) {
  const route = require(path.resolve(__dirname, 'api', file)).default
  router.use('/api', route.routes(), route.allowedMethods())
}

export default router
