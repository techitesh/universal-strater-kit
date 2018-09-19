import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import { Router } from "express";
import * as path from "path";

class ExpressServer  {
    public app: express.Application = express();
    private router: Router = Router();

    constructor() {
        dotenv.config({ path: ".env" });
        this.initializeConfig();
        this.initializeRoutes();
        this.createServer();
    }

    private initializeConfig() {
        this.app.use("/", express.static(path.join(__dirname, "public")));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use("/", this.router);
    }

    private initializeRoutes() {
        this.router.get("*", (req, res, next) => res.sendFile(path.join(__dirname, "public/index.html")));
    }
    private createServer() {
        this.app.listen(process.env.APP_PORT, () => {
            // tslint:disable-next-line:no-console
            console.log(`Server Running on PORT ${process.env.APP_PORT}!`);
        });
    }
}

export default new ExpressServer().app;
