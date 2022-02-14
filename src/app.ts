import express, {Application} from "express";
import bodyParser from "body-parser";
//import routes
import {authRouter} from "./contexts/account/infrastructure/router/auth.router";

const app: Application = express();
const PORT = 3000

// settings
app.set('port', PORT)
app.use(bodyParser.json())

// use routes
app.use(authRouter);

export default app;