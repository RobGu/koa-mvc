import Koa from 'koa'
import bodyparser from'koa-bodyparser'
import json from'koa-json'
import logger from'koa-logger'
import onerror from'koa-onerror'
import path from 'path'
import route from './routes'
import views from'koa-react-view'

const app = new Koa()
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(path.resolve('public')))

views(app,{views: path.resolve(__dirname,'views')})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(route.routes(), route.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
