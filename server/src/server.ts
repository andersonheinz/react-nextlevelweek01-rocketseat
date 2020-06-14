import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import { errors } from "celebrate";

const app = express();

const ip = require("ip");

console.log("*************************************************");
console.log(`MY ADDRESS IP DOCKER: ${ip.address()}`);
console.log("*************************************************");

app.use(cors());
app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333);
