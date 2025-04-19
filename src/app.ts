import express, { Application, NextFunction, Request, Response, Router } from "express";
import status from "http-status";
import cors from 'cors';
import router from "./app/routes";


const app:Application=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.send({
    Message:"Car service server Running now"
  });
  console.log("Response sent");
});


// --------------route common-------------
app.use('/api/v1',router);

// -------------- error handle---------
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(status.INTERNAL_SERVER_ERROR).send({
        success: false,
        message:  "api end point is not found",
        error: {
            path:req.originalUrl,
            message:"your requested path is not found !"
        }
    });
});

export default app;