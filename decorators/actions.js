import path from 'path';

import Router from 'koa-router';

import Log from '../Log';

const router = new Router();

export const getRoute = () => {
  return router;
}

const action = (method) => {
  return (rule) => {
    return (target, name, descriptor) => {
      if (!target.name) {
        Log.e(`@${method}: ${name} with decorator must be static`);
        return descriptor;
      }

      const controller = target.name.substr(0, target.name.length - 10);
      const action = rule || name;
      const url = path.resolve(`/${controller}/${action}`).toLowerCase();
      console.warn(method, target.name, controller, action, url)


      router[method](`${url}/`, async (ctx) => {
        const params = { ...ctx.query, ...ctx.params, ...ctx.request.body };
        const result = await target[name](params, ctx);
        ctx.body = ctx.body || result || {};
      });

      return descriptor;
    };
  }
};

export const get = action('get');
export const del = action('delete');
export const post = action('post');
export const put = action('put');
