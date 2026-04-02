"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const saveUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  revalidatePath("/"); // Revalidate the path to update the UI with the new user

  // return user;
};

export default saveUser;
