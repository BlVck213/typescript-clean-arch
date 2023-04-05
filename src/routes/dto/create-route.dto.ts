export class CreateRouteDto {

    @IsString()
    @IsNotEmpty()

    title: string;
    startPosition: {lat: number, lng: number};
    endPosition: {lat: number, lng: number};
}
