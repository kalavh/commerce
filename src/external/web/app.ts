import 'reflect-metadata';
import express from 'express';
import settings from '../config/settings';
import dynamicModuleLoading from './dynamic-module-loading';
import { useContainer } from 'class-validator';
import { TsyringeAdapter } from '../config/container';
import { container } from 'tsyringe';
import { setupSwagger } from '@/src/external/web/swagger';

const app = dynamicModuleLoading();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
useContainer(new TsyringeAdapter(container))
setupSwagger(app)


app.on('error', (error) => console.log({ error }))
app.listen(settings.PORT, () => {
  console.log(`App is running on port ${settings.PORT}`);
});