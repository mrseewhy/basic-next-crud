import { prisma } from "@/lib/prisma";
import EditNames from "@/app/_components/EditNames";
import Link from "next/link";

const EditName = async ({
  params,
}: {
  params: Promise<{ publicId: string }>;
}) => {
  const { publicId } = await params;

  const user = await prisma.user.findUnique({
    where: {
      publicId: publicId,
    },
  });
  return (
    <div className="mx-auto w-full max-w-3xl">
      <Link href="/" className="text-blue-500 underline mb-6 inline-block">
        Go back to home
      </Link>
      <h1 className="mt-12 mb-6 font-bold text-3xl">Edit {user?.name} </h1>
      <EditNames user={user} />
    </div>
  );
};

export default EditName;
