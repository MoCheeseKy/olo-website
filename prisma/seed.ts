import { PrismaClient } from '../src/generated/prisma/client';
import { PRODUCTS } from '../src/data/products';
import { BLOG_POSTS } from '../src/data/blogs';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';

dotenv.config(); // load .env
dotenv.config({ path: '.env.local' }); // load .env.local

const connectionString = process.env.DATABASE_URI || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URI is not set in environment variables');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding Database...');

  // Clear existing data
  await prisma.product.deleteMany();
  await prisma.blog.deleteMany();

  // Seed Products
  console.log('Seeding Products...');
  for (const p of PRODUCTS) {
    await prisma.product.create({
      data: {
        name: p.name,
        category: p.category,
        image: p.image,
        description: p.description,
        width: p.specs?.width,
        length: p.specs?.length,
        material: p.specs?.material,
        lubricant: p.specs?.lubricant,
        shopeeUrl: p.shopeeUrl,
        tokopediaUrl: p.tokopediaUrl,
      },
    });
  }

  // Seed Blogs
  console.log('Seeding Blogs...');
  for (const b of BLOG_POSTS) {
    await prisma.blog.create({
      data: {
        title: b.title,
        category: b.category,
        image: b.image,
        description: b.description,
        author: b.author,
        content: b.content.map((p) => `<p>${p}</p>`).join(''), // convert array of strings to html paragraphs
      },
    });
  }

  console.log('Seeding Completed Successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
