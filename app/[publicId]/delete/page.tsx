import Link from "next/link";
import { prisma } from "@/lib/prisma";
import deleteUser from "@/app/DeleteUser";
const DeleteName = async ({
  params,
}: {
  params: Promise<{ publicId: string }>;
}) => {
  const { publicId: publicId } = await params;

  const user = await prisma.user.findUnique({
    where: {
      publicId: publicId,
    },
  });
  return (
    <div>
      <div className="w-full max-w-3xl mt-12 p-8 mx-auto">
        <Link href="/" className="text-blue-500 underline mb-6 inline-block">
          Go back to home
        </Link>

        <p>User Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <div className="flex">
          <Link
            href={`/${publicId}`}
            className="text-blue-500 underline mt-4 inline-block"
          >
            No, Cancel
          </Link>
          <form action={deleteUser}>
            <input type="hidden" name="publicId" value={publicId} />
            <button
              type="submit"
              className="text-red-500 underline mt-4 inline-block ml-4"
            >
              Yes, Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteName;
