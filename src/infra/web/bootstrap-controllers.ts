import path from 'path';
import fs from 'fs';
import { attachControllers } from '@decorators/express';
import { Express } from 'express';

type Type<C extends object = object> = new (...args: any) => C;

export default async function bootstrapControllers(app: Express) {
  const controllerPath = path.resolve(__dirname, '../../application/adapters/controllers');
  console.log({ controllerPath })
  const controllers: Type[] = [];
  fs.readdirSync(controllerPath).forEach((fileName, key) => {
    controllers[key] = require(controllerPath + '/' + fileName).default;
  });

  attachControllers(app, controllers);
}