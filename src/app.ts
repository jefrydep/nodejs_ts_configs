// import "dotenv/config";
// import express from "express";
// import cors from "cors";

// const PORT = process.env.PORT || 3001;

// const app = express();
// app.use(cors());


// app.listen(PORT,()=> console.log(`Listo por el puerto ${PORT}`))

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import { prisma } from "./utils/prisma.server";
import { handleError } from "./middleware/error.middleware";
// import { docRoute, labRoute, receiptsRoute } from "./routes";
export const app = express();
require("dotenv").config();


const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// app.use('/api',docRoute)
// app.use('/api',labRoute)
// app.use('/api',receiptsRoute)


app.use(handleError)
app.get("/", (req: Request, res: Response) => {
  prisma;
  res.status(200).json({ message: "ok" });
});

export default app;