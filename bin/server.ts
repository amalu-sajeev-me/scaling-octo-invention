import express from "express";
import { connect, Connection } from "mongoose";

import { ICallbackFn } from "./types";
import { Server } from "http";
import { PORT, SERVER_ERROR_MSG, SERVER_START_MSG } from "./constants";
import { logger } from "./utils/logger";

export class ServerService {
  public static app = express();
  public static serverInstance: Server;
  public static startListen = async (
    cb?: ICallbackFn
  ): Promise<Server | never> => {
    try {
      const { DB_CONNECTION_STRING } = process.env;
      const dbConnection = await this.connectToDB(DB_CONNECTION_STRING!);
      if (dbConnection) {
        const server = this.app.listen(PORT, () => {
          logger.info(SERVER_START_MSG);
        });
        if (server) this.serverInstance = server;
        this.addGracefullShutdown();
        if (cb) cb();
        return server;
      }
      throw "error connecting to database";
    } catch (e) {
      logger.error(SERVER_ERROR_MSG, e);
      throw new Error(SERVER_ERROR_MSG);
    }
  };
  public static connectToDB = async (
    connsectionString: string
  ): Promise<Connection | never> => {
    try {
      const connection = await connect(connsectionString);
      return connection.connection;
    } catch (error) {
      throw error;
    }
  };
  public static addGracefullShutdown = () => {
    process.on("SIGTERM", () => {
      logger.info("SIGTERM signal received");
      logger.info("Closing HTTP server");
      this.serverInstance.close(() => {
        logger.info("Closed HTTP server");
      });
    });
  };
}
