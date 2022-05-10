import { Controller, Get, Next, Req, Res } from '@nestjs/common'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ConfigService } from '@nestjs/config'
import { createRequestHandler } from '@remix-run/express'
import type { NextFunction, Request, Response } from 'express'
import { BUILD_DIR, purgeRequireCache } from './common'

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('*')
  remix(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    const MODE = this.configService.get('NODE_ENV')
    if (MODE === 'production') {
      return createRequestHandler({ build: require(BUILD_DIR) })
    } else {
      purgeRequireCache()
      const requestHandler = createRequestHandler({
        build: require(BUILD_DIR),
        mode: MODE
      })
      return requestHandler(req, res, next)
    }
  }
}
