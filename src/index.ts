import { PrismaClient } from '@prisma/client';
import { parseArgs } from 'node:util';


const prisma = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query',
    }
  ]
});

async function main() {
  await prisma.user.create({
    data: {
      name: 'lisi',
      posts: { create: { title: 'bbb' } },
      prifile: {
        create: { bio: 'I like turtles333' }
      }
    }
  })
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true
    }
  });
  console.dir(allUsers, {
    depth: null
  });
}

async function findAll() {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        prifile: true,
      }
    });
    console.dir(allUsers, {
      depth: null
    });
  } catch (error) {
    console.log(error);
  prisma.$disconnect()
  }
}

// main().then(() => prisma.$disconnect()).catch((e) => {
//   console.log(e);
//   prisma.$disconnect()
// })

// findAll()

async function find() {
  const allUser = await prisma.user.findUnique(
    { 
      select: { name: true, prifile: true, posts: true },
      where: { name: 'zhangsan' }, 
      // include: { prifile: true, posts: true },
    });
  console.dir(allUser, { depth: null })
}

// find();

async function findFirst() {
  const user = await prisma.user.findFirst({
    select: {
      name: true,
      posts: {
        select: {
          title: true,
          published: true,
        }
      }
    }
  });
  console.dir(user)
}

// findFirst();

const functions: Record<string, Function> = {
  find,
  findFirst,
}

const options = {
  func: { type: 'string' as const, default: 'aaa' }
}

const { values } = parseArgs({ options });
console.dir(values.func, { depth: null });

functions[values.func]?.();
