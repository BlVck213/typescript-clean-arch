export type RankingScore = {
    player: Player
    score: number
    matchDate:String
    hero: Hero[]
}

type Player = {
    name: string,
    country: string
}
type Hero = {
    name: string
    level: number
}