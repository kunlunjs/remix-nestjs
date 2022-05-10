import type { NestMiddleware } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ConfigService } from '@nestjs/config'
import type { Request, Response, NextFunction } from 'express'

@Injectable()
export class FlyMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // if we're not in the primary region, then we need to make sure all
    // non-GET/HEAD/OPTIONS requests hit the primary region rather than read-only
    // Postgres DBs.
    // learn more: https://fly.io/docs/getting-started/multi-region-databases/#replay-the-request
    const { method, path: pathname } = req
    const FLY_REGION = this.configService.get('FLY_REGION')
    const PRIMARY_REGION = this.configService.get('PRIMARY_REGION')

    const isMethodReplayable = !['GET', 'OPTIONS', 'HEAD'].includes(method)
    const isReadOnlyRegion =
      FLY_REGION && PRIMARY_REGION && FLY_REGION !== PRIMARY_REGION

    const shouldReplay = isMethodReplayable && isReadOnlyRegion

    if (!shouldReplay) return next()

    const logInfo = {
      pathname,
      method,
      PRIMARY_REGION,
      FLY_REGION
    }
    console.info(`Replaying:`, logInfo)
    res.set('fly-replay', `region=${PRIMARY_REGION}`)
  }
}
