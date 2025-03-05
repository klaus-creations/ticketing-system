import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";

// HACK: import all routes

// HACK: IMPORT OTHER DEFINITIONS IN OTHER FILES

const app = express();

// NOTE: DEFINE SOME MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// NOTE: DEFINE ALL ROUTE ENDPOINTS

app.listen(PORT, async () => {
  console.log(`listening on ${3000}`);
});
