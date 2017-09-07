import fs from 'fs';
import path from 'path';

import Router from 'koa-router';

import { del, get, getRoute, post, put } from './decorators/actions';
import service from './decorators/service';

export {
  del,
  get,
  post,
  put,
  service,
}

export default (option) => {
  const router = new Router();
  const controllerPath = option.path || '.';

  const files = fs.readdirSync(controllerPath);
  for (const file of files) {
    if (!/Controller\.js/.test(file)) {
      continue;
    }

    const filename = path.resolve(controllerPath, file);
    require(filename);
  }

  router.use(getRoute().routes(), getRoute().allowedMethods());

  return router;
}