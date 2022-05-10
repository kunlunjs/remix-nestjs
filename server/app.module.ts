import type { MiddlewareConsumer, NestModule } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FlyMiddleware, PresetMiddleware } from './middlewares'

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
    //         renderPath: 'build',
    //         exclude: ['/api/*'],
    //         serveStaticOptions: {
    //           immutable: true,
    //           maxAge: '1y'
    //         }
    //       },
    //       {
    //         rootPath: path.resolve(process.cwd(), 'public'),
    //         // renderPath: path.resolve(process.cwd(), 'public/build'),
    //         exclude: ['/api/*'],
    //         serveStaticOptions: {
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
      .apply(PresetMiddleware, FlyMiddleware)
      // .exclude('build/*')
      .forRoutes('*')
  }
}
