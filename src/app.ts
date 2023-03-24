import { ServerService } from "../bin/server";
import { openapiSpecification } from "./middlewares/swagger";
import { UserRouter } from "./routers/user.router";

import swagger from "swagger-ui-express";
const { app } = ServerService;
app.use("/api-docs", swagger.serve, swagger.setup(openapiSpecification));
app.use(UserRouter);
