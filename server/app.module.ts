import type { MiddlewareConsumer, NestModule } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FlyMiddleware, PreMiddleware, RemixMiddleware } from './middlewares'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
    // ServeStaticModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => {
    //     return [
    //       {
    //         rootPath: path.resolve(process.cwd(), 'public/build'),
    //         renderPath: path.resolve(process.cwd(), 'public/build'),
    //         exclude: ['/', '/build/*', '/notes/*', '/posts/*'],
    //         serveStaticOptions: {
    //           immutable: true,
    //           maxAge: '1y'
    //         }
    //       }
    //     ]
    //   }
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PreMiddleware, FlyMiddleware, RemixMiddleware)
      .exclude('build/*')
      .forRoutes('*')
  }
}
