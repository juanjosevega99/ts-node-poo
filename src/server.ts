import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Config } from './config';

export class Server {
  private port = Number(Config.api().port);
  private app!: express.Application;

  public constructor() {
    this.createApp();
    this.configApp();
    this.runServer();
  }

  public getApp(): express.Application {
    return this.app;
  }

  public createApp(): void {
    this.app = express();
  }

  public configApp(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }

  public runServer(): void {
    this.app.listen(this.port, () => console.log(`Running in the port ${this.port}`));
  }
}
