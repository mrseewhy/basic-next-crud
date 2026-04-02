import { prisma } from "@/lib/prisma";
import Link from "next/link";

const allName = async () => {
  const names = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      publicId: true,
    },
  });
  return names;
};
const GetNames = async () => {
  const names = await allName();
  return (
    <div>
      <div className="mt-12 flex gap-4 flex-wrap">
        {names.map((name) => (
          <div key={name.publicId} className="border p-4 rounded-md">
            <Link href={`${name.publicId}`}>
              <p className="font-bold">Name: {name.name},</p>
            </Link>
            <p>Email: {name.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetNames;
