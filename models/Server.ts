import express, { Express } from "express";
import { connectToDB } from "../database/config";
import router from "../Routes/gastos";
import routerTitular from "../Routes/titular";



export class Server{
    app: Express;
    constructor(){
        this.app = express();
        this.start();
        this.middlewares();
        this.routes();
    }

    async start():Promise<void>{
        await connectToDB();
    }

    middlewares():void{
        this.app.use(express.json());
    }
    routes():void{
        this.app.use('/gastos', router);
        this.app.use('/titular', routerTitular);
    
    }

    listen(port:number):void{
        this.app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });}
    
}