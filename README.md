mysql://USER:PASSWORD@HOST:PORT/DATABASE

npx prisma init --datasource-provider mysql

prisma init --url mysql://root:duoduoxu!@localhost:3306/hello-prisma

npx prisma migrate dev --name init

npx prisma db push

tsx 可理解为 “TypeScript Execute”，是一个基于 esbuild 打造的执行 TypeScript 文件的命令行工具。

npx（“node.js package execute”）的含义，是 node 命令的直接替代品。

npx tsc --init

Creates a tsconfig.json with the recommended settings in the working directory.

prisma db seed 执行脚本, 插入初始数据到数据库。
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
  "devDependencies": {
    "@types/node": "^14.14.21",
    "ts-node": "^9.1.1",
    "typescript": "^4.1.3"
  }
}
```

## Commands
- init   Set up Prisma for your app
- generate   Generate artifacts (e.g. Prisma Client)
- db   Manage your database schema and lifecycle
- migrate   Migrate your database
- studio   Browse your data with Prisma Studio
- validate   Validate your Prisma schema
- format   Format your Prisma schema
- version   Displays Prisma version info
- debug   Displays Prisma debug info

TSX vs. TS-Node and Nodemon

