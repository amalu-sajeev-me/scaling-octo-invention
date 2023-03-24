import "dotenv/config";
import "./src/app";
import { ServerService } from "./bin/server";

ServerService.startListen();
