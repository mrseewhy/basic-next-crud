"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const editUser = async (formData: FormData) => {
  const publicId = formData.get("publicId") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await prisma.user.update({
    where: {
      publicId,
    },
    data: {
      email,
      name,
    },
  });
  revalidatePath("/"); // Revalidate the path to update the UI with the edited user

  return redirect(`/${publicId}`); // Redirect to the user's page after editing
};

export default editUser;
