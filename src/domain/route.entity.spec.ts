import { LatLng, Route, RouteProps } from "./route.entity";

describe('Route Tests', () => {
    test('constructor', () => {
        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 1, lng: 3},
            endPosition: {lat: 6, lng: 5},
        }
        let route = new Route(routeProps);
        expect(route.id).toBeDefined();
        expect(route.props).toStrictEqual({
            ...routeProps, points: []
        })

        routeProps = {
            title: 'minha rota',
            startPosition: {lat: 1, lng: 3},
            endPosition: {lat: 6, lng: 5},
            points: [{lat: 6, lng: 12}]
        }

        route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points: [
                {lat: 6, lng: 12}
            ]
        })
    })

    test('updateTitle method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 1, lng: 3},
            endPosition: {lat: 6, lng: 5},
        }
        const route = new Route(routeProps);
        route.updateTitle('test title')
        expect(route.title).toBe('test title');
    })


    test('updatePosition method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 1, lng: 3},
            endPosition: {lat: 6, lng: 5},
        }
        const route = new Route(routeProps);
        const startPosition = {lat: 1, lng: 3};
        const endPosition = {lat: 6, lng: 5};
        route.updatePosition(startPosition, endPosition)
        expect(route.startPosition).toBe(startPosition);
        expect(route.endPosition).toBe(endPosition);

    })

    test('updatePoints method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 1, lng: 3},
            endPosition: {lat: 6, lng: 5},
        }
        const route = new Route(routeProps);
        const points:LatLng[] = [
            {lat: 10, lng: 30}
        ]
        route.updatePoints(points);
        expect(route.points).toHaveLength(1);
        expect(route.points).toStrictEqual(points);
    })

})