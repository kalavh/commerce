import 'reflect-metadata';
import express from 'express';
import settings from '../config/settings';
import bootstrapControllers from './bootstrap-controllers';
import helmet from 'helmet'
import { attachControllers } from '@decorators/express';
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(helmet())

console.log('OIIII')
// bootstrapControllers(app);

/* attachControllers(app, [
  require('../../application/adapters/controllers')
]);
 */

app.on('error', (e) => console.log({ error: e}) )
app.listen(settings.PORT, () => {
  console.log(`App listening on port ${settings.PORT}`);
});