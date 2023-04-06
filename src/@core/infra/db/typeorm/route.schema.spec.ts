import { DataSource } from 'typeorm'
import { RouteSchema } from './route.schema'
import { Route } from '../../../domain/route.entity'

describe('RouteSchema tests', () => {

    test('should create a route schema', async () => {
        const dataSource = new DataSource({
            type: 'sqlite',
            database: 'memory',
            synchronize: true,
            logging: false,
            entities: [RouteSchema]
        })
        await dataSource.initialize()
        const route = Route.create({
            title: 'my route',
            startPosition: {lat: 1, lng: 2},
            endPosition: {lat: 4, lng: 6},
            points: [{lat: 3, lng: 3}]
        })
     
        const routeRepo = dataSource.getRepository(Route)
        await routeRepo.save(route)
        console.log(await routeRepo.findOneBy({id: route.id}))
    })
})