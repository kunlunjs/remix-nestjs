# remix-nestjs
Remix 项目模板，使用 NestJS 作为服务端

## Developing
1. `pnpm i`
2. `copy .env.example .env`
3. `npm run docker`
4. `npx prisma generate`
5. `npm run dev`

## Testing
1. `npm run build`
2. `npm run test:e2e:dev` or `npm run test:e2e:run`

## 目录结构

```
remix-nestjs                       
├─ app                             
│  ├─ models                       
│  │  ├─ note.server.ts            
│  │  └─ user.server.ts            
│  ├─ routes                       
│  │  ├─ notes                     
│  │  │  ├─ $noteId.tsx            
│  │  │  ├─ index.tsx              
│  │  │  └─ new.tsx                
│  │  ├─ healthcheck.tsx           
│  │  ├─ index.tsx                 
│  │  ├─ join.tsx                  
│  │  ├─ login.tsx                 
│  │  ├─ logout.tsx                
│  │  └─ notes.tsx                 
│  ├─ styles                       
│  │  └─ tailwind.css              
│  ├─ db.server.ts                 
│  ├─ entry.client.tsx             
│  ├─ entry.server.tsx             
│  ├─ root.tsx                     
│  ├─ session.server.ts            
│  ├─ utils.test.ts                
│  └─ utils.ts                     
├─ cypress                         
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
│  │  └─ smoke.ts.mp4              
│  └─ tsconfig.json                
├─ mocks                           
│  ├─ index.js                     
│  └─ start.ts                     
├─ postgres-data                   
├─ prisma                          
│  ├─ schema.prisma                
│  └─ seed.ts                      
├─ public                          
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
├─ fly.toml                        
├─ lint-staged.config.js           
├─ package.json                    
├─ pnpm-lock.yaml                  
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

## 相关链接
- [cypress](https://docs.cypress.io/)
