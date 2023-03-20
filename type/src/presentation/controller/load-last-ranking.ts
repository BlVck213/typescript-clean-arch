import { LastRankingLoader } from "@/domain/usecases";
import { Controller, HttpResponse, serverError, ok } from "@/presentation/contracts";
import { RankingScoreViewModel } from "@/presentation/view-models/ranking-score";

export class LoadLastRankingController implements Controller {
    constructor (private readonly lastRankingLoader: LastRankingLoader) {}

    async handle (): Promise<HttpResponse<RankingScoreViewModel[]>> {

        try {
            const ranking = await this.lastRankingLoader.load()
            const viewModels = ranking.map(item => ({
                ... item,
                matchDate: item.matchDate.toString()
            }))

            return ok(viewModels)
        } catch (error) {
            return serverError(error)
        }
       
    }
}