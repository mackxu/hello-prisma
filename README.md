## 文档
[Prisma Client API reference](https://www.prisma.io/docs/orm/reference/prisma-client-reference)

[Prisma schema reference](https://www.prisma.io/docs/orm/reference/prisma-schema-reference)

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

## schema语法
- @map 定义字段在数据库中的名字
- @@map 定义表在数据库中的名字
- @@index 定义索引
- @@id 定义联合主键
- @relation 定义外键引用
- @unique 添加唯一约束
- @default 定义默认值
- @id 定义主键

## Prisma Client API

- create、crateMany
- update、updateMany
- upsert
- delete、deleteMany
- findMany
- findFirst、findFirstOrThrow
- findUnique、findUniqueOrThrow
- count、aggregate、groupBy

## 给ts-node添加自定义参数

```json
"scripts": {
  "start": "NODE_OPTIONS='-r ts-node/register --no-warnings' node ./src/index.ts"
},
```
参考：[https://www.npmjs.com/package/ts-node#node-flags-and-other-tools](https://www.npmjs.com/package/ts-node#node-flags-and-other-tools)

## 给tsx添加自定义参数
```bash
npx tsx ./src/index.ts --func find
```

## nodejs获取自定义参数 parseArgs
```ts
import { parseArgs } from 'node:util';

const options = {
  func: { type: 'string' as const, default: 'aaa' }
}

const { values } = parseArgs({ options });
console.dir(values.func, { depth: null });
```