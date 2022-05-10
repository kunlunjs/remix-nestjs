import type { NestMiddleware } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ConfigService } from '@nestjs/config'
import { createRequestHandler } from '@remix-run/express'
import type { Request, Response, NextFunction } from 'express'
import { BUILD_DIR, purgeRequireCache } from '../common'

@Injectable()
export class RemixMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const MODE = this.configService.get('NODE_ENV')
    if (MODE === 'production') {
      createRequestHandler({ build: require(BUILD_DIR) })
    } else {
      purgeRequireCache()
      const requestHandler = createRequestHandler({
        build: require(BUILD_DIR),
        mode: MODE
      })
      return requestHandler(req, res, next)
    }
    return res.sendStatus(409)
  }
}
