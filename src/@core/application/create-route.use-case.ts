import { CreateRouteDto } from "src/routes/dto/create-route.dto";
import { RouteRepositoryInterface } from "../domain/route-repository";
import { LatLng, Route } from "../domain/route.entity";

export class CreateRouteUseCase {
    create(createRouteDto: CreateRouteDto) {
      throw new Error('Method not implemented.');
    }

    constructor(private routeRepo: RouteRepositoryInterface){}

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput>{
        const route = new Route(input);
        await this.routeRepo.insert(route);
        return route.toJSON();
    }

}

type CreateRouteInput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}

type CreateRouteOutput = {
    id: string;
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}