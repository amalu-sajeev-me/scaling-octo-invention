import { createLogger, format } from "winston";

export const logger = createLogger({
  level: "info",
  format: format.json(),
});
