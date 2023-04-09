import express from "express";
import router from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export { app }
