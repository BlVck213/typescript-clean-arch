import { RankingScore } from "@/domain/entities"

export class RankingScoreViewModel {
    player: Player
    score: number
    matchDate:String
    hero: Hero[]

    static map (entity: RankingScore): RankingScoreViewModel {
        return {
            ... entity,
            matchDate: entity.matchDate.toString()
        }
    }

    static mapCollection (entities: RankingScore[]): RankingScoreViewModel[] {
        return entities.map(entity => RankingScoreViewModel.map(entity))
    }
}

type Player = {
    name: string,
    country: string
}
type Hero = {
    name: string
    level: number
}
