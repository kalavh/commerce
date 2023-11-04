import path from 'path';
import fs from 'fs';
import { createExpressServer } from 'routing-controllers';
import { Express } from 'express'

export default function dynamicModuleLoading(): Express {
  const controllerPath = path.resolve(__dirname, '../../adapters/controllers');

  const controllers = fs.readdirSync(controllerPath).map((fileName) =>
    `${controllerPath}/${fileName}`
  );

  return createExpressServer({ controllers })
}