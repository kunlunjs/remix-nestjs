import type { NestMiddleware } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ConfigService } from '@nestjs/config'
import type { Request, Response, NextFunction } from 'express'

@Injectable()
export class PresetMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // helpful headers:
    res.set('x-fly-region', process.env.FLY_REGION ?? 'unknown')
    res.set('Strict-Transport-Security', `max-age=${60 * 60 * 24 * 365 * 100}`)

    // /clean-urls/ -> /clean-urls
    if (req.path.endsWith('/') && req.path.length > 1) {
      const query = req.url.slice(req.path.length)
      const safepath = req.path.slice(0, -1).replace(/\/+/g, '/')
      res.redirect(301, safepath + query)
      return
    }
    next()
  }
}
