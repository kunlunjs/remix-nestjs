/* eslint-disable react-hooks/rules-of-hooks */
import path from 'path'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import chalk from 'chalk'
import express from 'express'
// import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module'
// import { PrismaService } from './common/prisma'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true
    // bufferLogs: true
  })

  app.disable('x-powered-by')
  // app.useLogger(app.get(Logger))
  app.use(
    '/build',
    express.static(path.resolve(process.cwd(), 'public/build'), {
      immutable: true,
      maxAge: '1y'
    })
  )
  app.use(express.static('public', { maxAge: '1h' }))
  // const { httpAdapter } = app.get(HttpAdapterHost)

  const configService = app.get(ConfigService)

  /* prisma */
  // const prismaService: PrismaService = await app.get<PrismaService>(
  //   PrismaService
  // )
  // prismaService.enableShutdownHooks(app)

  // app.setGlobalPrefix('api')
  // useContainer(app.select<AppModule>(AppModule), {
  //   fallbackOnErrors: true
  // })
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true
  //   })
  // )
  // app.useGlobalInterceptors()
  // app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))
  // setupSwagger(app)

  await app.listen(configService.get('PORT') || 3000)
  console.log(
    chalk.green(
      `⚡️ Application is running on1: ${chalk.underline(await app.getUrl())}`
    )
  )
}

bootstrap()
