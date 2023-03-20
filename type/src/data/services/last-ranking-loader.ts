import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingRepository } from '@/data/contracts'
import { RankingUnavaibleError } from '@/domain/errors'

export class LastRankingLoaderServices implements LastRankingLoader {
    constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) {}
    
    async load (): Promise<RankingScore[]> {
        if(new Date().getHours() > 21) {
            throw new RankingUnavaibleError()   
        }
        return this.loadLastRankingRepository.loadLastRanking()
    }
}