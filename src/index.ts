import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import about from "./routes/about";
const PORT=4000;    

const startServer=async()=>
{
    
    dotenv.config();
    
    const app: Express = express();
    const port = process.env.PORT?process.env.PORT:PORT;
    
    app.get('/', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server');
    });
    app.use("/about",about);
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
}
startServer().catch(e=>console.log("error strting server======== ",e))
