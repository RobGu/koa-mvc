import path from 'path';

import Router from 'koa-router';

import Log from '../Log';

const router = new Router();

export const getRoute = () => {
  return router;
};

const methods = (type) => {
  return (rule) => {
    return (target, name, descriptor) => {
      if (!target.name) {
        Log.e(`@${type}: ${name} with decorator must be static`);
        return descriptor;
      }

      const controller = target.name.substr(0, target.name.length - 10);
      const action = rule || name;
      let url = `/${controller}/${action}/`.toLowerCase();
      url = url.replace('//', '/');
      console.warn(type, target.name, controller, action, url);


      router[type](url, async (ctx) => {
        const params = { ...ctx.query, ...ctx.params, ...ctx.request.body };
        const result = await target[name](params, ctx);
        ctx.body = ctx.body || result || {};
      });

      return descriptor;
    };
  };
};

export const get = methods('get');
export const del = methods('delete');
export const post = methods('post');
export const put = methods('put');
