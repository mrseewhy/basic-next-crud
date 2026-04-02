"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const deleteUser = async (formData: FormData) => {
  const publicId = formData.get("publicId") as string;

  await prisma.user.delete({
    where: {
      publicId,
    },
  });
  revalidatePath("/"); // Revalidate the path to update the UI after deletion

  return redirect("/"); // Redirect to the home page after deletion
};

export default deleteUser;
