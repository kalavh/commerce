import 'reflect-metadata';
import express from 'express';
import settings from '../config/settings';
import dynamicModuleLoading from './dynamic-module-loading';

const app = dynamicModuleLoading();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.on('error', (error) => console.log({ error }))
app.listen(settings.PORT, () => {
  console.log(`App is running on port 8080`);
});