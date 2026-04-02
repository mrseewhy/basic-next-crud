import { prisma } from "@/lib/prisma";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ publicId: string }> }) => {
  const { publicId: publicId } = await params;

  const user = await prisma.user.findUnique({
    where: {
      publicId: publicId,
    },
  });

  return (
    <div className="w-full max-w-3xl mt-12 p-8 mx-auto">
      <Link href="/" className="text-blue-500 underline mb-6 inline-block">
        Go back to home
      </Link>
      <p>User Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <div>
        <Link
          href={`/${publicId}/edit`}
          className="text-blue-500 underline mt-4 inline-block"
        >
          Edit User
        </Link>
        <Link
          href={`/${publicId}/delete`}
          className="text-red-500 underline mt-4 inline-block ml-4"
        >
          Delete User
        </Link>
      </div>
    </div>
  );
};

export default page;
