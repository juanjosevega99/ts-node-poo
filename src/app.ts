import { Server } from './server';

const app = new Server().getApp();

app.use('/', (req, res) => res.send('hello there'));

export { app };
