import { prisma } from '@/lib/db';

const Page = async () => {
  const users = await prisma.post.findMany();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default Page;