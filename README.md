# remix-nestjs
Remix 项目模板，使用 NestJS 作为服务端

## Usage
`npx create-remix --template turing-fe/remix-nestjs remix-nestjs-project`

## Feature
- [ ] NestJS
- [ ] React18
- [ ] MDX
- [ ] Remark
- [ ] Rehype

## Developing
1. `pnpm i`
2. `copy .env.example .env`
3. `npm run docker`
4. `npx prisma generate`
5. `npm run build`
6. `npm run dev`

## Testing
1. `npm run build`
2. `npm run test:e2e:dev` or `npm run test:e2e:run`

## 目录结构

```
remix-nestjs                       
├─ app                             
│  ├─ models                                
│  │  └─ note.server.ts    操作 Note 表数据
│  │  └─ user.server.ts    操作 User 表数据           
│  ├─ routes                       
│  │  ├─ notes                     
│  │  │  ├─ $noteId.tsx    对应前端 /notes/:noteId 路由         
│  │  │  ├─ index.tsx      对应前端 /notes 路由         
│  │  │  └─ new.tsx        对应前端 /notes/new 路由         
│  │  ├─ healthcheck.tsx   对应前端 /healthcheck 路由           
│  │  ├─ index.tsx         对应前端 / 路由         
│  │  ├─ join.tsx          对应前端 /join 路由            
│  │  ├─ login.tsx         对应前端 /login 路由            
│  │  ├─ logout.tsx        执行退出登录操作（无页面）                         
│  ├─ styles                       
│  │  └─ tailwind.css      由 npm run generate:css 生成        
│  ├─ db.server.ts         prisma 初始化        
│  ├─ entry.client.tsx     浏览器端入口        
│  ├─ entry.server.tsx     服务端入口        
│  ├─ root.tsx                     
│  ├─ session.server.ts    cookie 存取         
│  ├─ utils.test.ts                
│  └─ utils.ts             工具函数        
├─ cypress                 页面自动化测试        
│  ├─ e2e                          
│  │  └─ smoke.ts                  
│  ├─ fixtures                     
│  │  └─ example.json              
│  ├─ plugins                      
│  │  └─ index.ts                  
│  ├─ support                      
│  │  ├─ commands.ts               
│  │  ├─ create-user.ts            
│  │  ├─ delete-user.ts            
│  │  └─ index.ts                  
│  ├─ videos                       
│  │  └─ smoke.ts.mp4      [optional] npm run test:e2e:run 生成              
│  └─ tsconfig.json                
├─ mocks                   mock 数据        
│  ├─ index.js                     
│  └─ start.ts                     
├─ postgres-data           [optional] docker-compose.yml 中 PostgreSQL 本地数据卷映射目录        
├─ prisma                          
│  ├─ schema.prisma        Prisma 数据对象定义        
│  └─ seed.ts              Prisma 初始化数据        
├─ public                  静态文件目录        
│  └─ favicon.ico                  
├─ remix.init                      
│  ├─ index.js                     
│  ├─ package.json                 
│  └─ pnpm-lock.yaml               
├─ test                            
│  └─ setup-test-env.ts            
├─ Dockerfile                      
├─ LICENSE                         
├─ README.md                       
├─ cypress.json                    
├─ docker-compose.yml              
├─ fly.toml                 部署至 fly.io       
├─ lint-staged.config.js           
├─ package.json                                     
├─ prettier.config.js              
├─ remix.config.js                 
├─ remix.env.d.ts                  
├─ server.ts                       
├─ stylelint.config.js             
├─ tailwind.config.js              
├─ tsconfig.json                   
├─ verify-commit-msg.js            
└─ vitest.config.ts                
```

## Upgrate to React 18
`app/entry.client.tsx`

```diff
- import { hydrate } from 'react-dom'
- hydrate(<RemixBrowser />, document)

+ import { hydrateRoot } from 'react-dom/client'
+ hydrateRoot(document, <RemixBrowser />)
```

## 相关链接
- [cypress](https://docs.cypress.io/)
