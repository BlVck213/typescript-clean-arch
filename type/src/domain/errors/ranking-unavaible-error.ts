export class RankingUnavaibleError extends Error {
    constructor() {
        super('Ranking unavaible')
        this.name = 'RankingUnavaibleError'
    }
}