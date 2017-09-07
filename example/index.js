import fs from 'fs';
import path from 'path';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import cors from 'koa-cors';

import Controller from '../';
import A from './controllers/AController';

const controller = Controller({
  path: 'example/controllers'
});

const app = new Koa();
app.use(bodyParser());
app.use(convert(cors()));

app.use(controller.routes(), controller.allowedMethods())

app.listen(8500);

