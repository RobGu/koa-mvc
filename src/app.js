import http from 'http'
import path from 'path'

import Debug from 'debug'
import Koa from 'koa'
import bodyparser from'koa-bodyparser'
import json from'koa-json'
import logger from'koa-logger'
import onerror from'koa-onerror'
import views from'koa-react-view'
import statics from 'koa-static'

import route from './routes'

const debug = Debug('demo:server')

const app = new Koa()
onerror(app)
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(statics(path.resolve('public')))

views(app,{views: path.resolve(__dirname,'views')})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(route.routes(), route.allowedMethods())
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

var port = normalizePort(process.env.PORT || '3000');

var server = http.createServer(app.callback());
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
