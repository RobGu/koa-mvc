import path from 'path';

import Router from 'koa-router';

import Log from '../Log';

const router = new Router();

export const getRoute = () => {
  return router;
}


export default (name) =>  {
  return (target) => {
    Log.w(target.name)
  };
};
