import { Route, RouteProps } from "../../domain/route.entity"
import { RouteInMemoryRepository } from "./route-in-memory-repository"

describe('RouteInMemoryRespository Test', () => {

    it('should insert a new route', () => {
        const repository = new RouteInMemoryRepository()
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 1, lng: 3},
            endPosition: {lat: 6, lng: 5},
        }
        const route = new Route(routeProps);
        repository.insert(route);
        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route])
    })
})