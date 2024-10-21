import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";

export default async function Home() {
  const user = await currentUser();
  const username = user?.username;
  const userImage = user?.imageUrl;
  console.log(userImage);

  const welcomeSuffix = username ? `, ${username}` : "";
  if (!user) {
    redirect("/profile");
  }
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h2>Welcome {welcomeSuffix}</h2>
      <p>Please can you update your Profile page!</p>
    </div>
  );
}
