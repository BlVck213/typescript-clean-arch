import express, {Express, Request, Response} from "express";
import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { RouteInMemoryRepository } from "../../db/route-in-memory-repository";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";

const app: Express = express();
app.use(express.json())

const port = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.get('/routes', async (req: Request, res: Response) => {
    const listAllUseCase = new ListAllRoutesUseCase(routeRepo);
    const output = await listAllUseCase.execute();
    res.status(200).json(output);
})  

app.post('/routes', async (req: Request, res: Response) => {
    const createUseCase = new CreateRouteUseCase(routeRepo);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
})  

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

