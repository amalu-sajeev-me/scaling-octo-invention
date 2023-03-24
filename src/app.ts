import { ServerService } from "../bin/server";
import { UserRouter } from "./routers/user.router";

const { app } = ServerService;

app.use(UserRouter);
