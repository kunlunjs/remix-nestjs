# remix-nestjs
Remix 项目模板，使用 NestJS 作为服务端

## 使用
`npx create-remix --template turing-fe/remix-nestjs remix-nestjs-project`

## 功能
- ✅  [React18]()
- ✅  [MDX]()
- ✅  [Remark]()
- ✅  [Rehype]()
- ✅  [PostgreSQL]()
- ✅  [Cypress]()
- [ ] [Docker]()
- [ ] [NestJS]()
- [ ] [contentlayer](https://github.com/contentlayerdev/contentlayer)
- [ ] [Fly.io]()

## 开发
1. `pnpm i`
2. `copy .env.example .env`
3. `npm run docker`
4. `npx prisma generate`
5. `npx prisma db push`
6. `npm run build`
7. `npm run dev`

## 测试
1. `npm run build`
2. `npm run test:e2e:dev` or `npm run test:e2e:run`

## 生产
1. `npm run build`
2. `npm run start` or `npm run start:pm2` or `npm run start:mocks`

<details>
  <summary>目录结构</summary>

```bash
remix-nestjs                               
├─ app                                     
│  ├─ components                  # 前端组件                              
│  ├─ models                      # prisma model         
│  │  ├─ note.server.ts                    
│  │  └─ user.server.ts                    
│  ├─ routes                      # 路由页                                        
│  │  ├─ healthcheck.tsx                   
│  │  ├─ index.tsx                         
│  │  ├─ join.tsx                          
│  │  ├─ login.tsx                         
│  │  ├─ logout.tsx                        
│  │  ├─ notes.tsx                                                                                         
│  ├─ styles                               
│  │  └─ tailwind.css                      
│  ├─ db.server.ts                # 全局 prisma 对象         
│  ├─ entry.client.tsx            # 实用 react-dom 将组件挂载到根元素上         
│  ├─ entry.server.tsx            # 后端返回 html         
│  ├─ root.tsx                    # 前端根组件         
│  ├─ session.server.ts                    
│  ├─ utils.test.ts                        
│  └─ utils.ts                             
├─ build                          # 服务端构建输出                                 
├─ cypress                        # UI 测试                              
├─ mocks                          # mock 数据         
│  ├─ index.js                             
│  └─ start.ts                                                 
├─ prisma                         # prisma model 定义         
│  ├─ schema.prisma               # 数据库初始化         
│  └─ seed.ts                              
├─ public                         # 前端构建输出及静态文件                             
├─ remix.init                              
│  ├─ index.js                             
│  ├─ package.json                                              
├─ server                         # NestJS backend         
│  ├─ common                               
│  │  ├─ config.ts                         
│  │  ├─ index.ts                          
│  │  └─ utils.ts                          
│  ├─ filters                              
│  ├─ interfaces                           
│  ├─ middlewares                          
│  │  ├─ fly.middleware.ts                 
│  │  ├─ index.ts                          
│  │  └─ preset.middleware.ts              
│  ├─ app.controller.ts                    
│  ├─ app.module.ts                        
│  ├─ app.service.ts                       
│  └─ main.ts                      # NestJS backend 入口        
├─ test                                    
│  └─ setup-test-env.ts                    
├─ Dockerfile                              
├─ LICENSE                                 
├─ README.md                               
├─ cypress.json                            
├─ docker-compose.mysql.yml                
├─ docker-compose.yml                      
├─ ecosystem.config.js             # pm2 启动配置        
├─ fly.toml                        # 部署至 fly.io        
├─ lint-staged.config.js                   
├─ nest-cli.json                           
├─ nodemon.json                            
├─ package.json                            
├─ pnpm-lock.yaml                          
├─ prettier.config.js                      
├─ remix.config.js                         
├─ remix.env.d.ts                          
├─ server.ts                       # backend entrypoint        
├─ stylelint.config.js                     
├─ tailwind.config.js                      
├─ tsconfig.build.json                     
├─ tsconfig.json                           
├─ verify-commit-msg.js                    
└─ vitest.config.ts                                     
```
</details>

## 升级为 React18
> app/entry.client.tsx

```diff
- import { hydrate } from 'react-dom'
- hydrate(<RemixBrowser />, document)

+ import { hydrateRoot } from 'react-dom/client'
+ hydrateRoot(document, <RemixBrowser />)
```

## TODO
- [ ] nodemon


## 相关链接
- [remix](https://remix.run/docs/en/v1)
- [blues-stack](https://github.com/remix-run/blues-stack)
- [TaiwindCSS](https://tailwindcss.com/)
- [Sandpack](https://sandpack.codesandbox.io/docs/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [cypress](https://docs.cypress.io/)
- [Fly.io](https://fly.io/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Mock Service Worker](https://mswjs.io/)
