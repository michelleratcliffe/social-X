import { currentUser } from "@clerk/nextjs/server";
import { connect } from "@/lib/connect";


export default async function Home() {
  const user = await currentUser()
  const username = user?.username;

  const welcomeSuffix = username ?`, ${username}` : '';

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Welcome {welcomeSuffix}</h2>
      <p>Welcome to Bebo 2. Bankruptcy can&apos;t stop us!</p>
      <h2>Welcome {welcomeSuffix}</h2>
      <p>Welcome to Bebo 2. Bankruptcy can&apos;t stop us!</p>
      <h2>Welcome {welcomeSuffix}</h2>
      <p>Welcome to Bebo 2. Bankruptcy can&apos;t stop us!</p>
      <h2>Welcome {welcomeSuffix}</h2>
      <p>Welcome to Bebo 2. Bankruptcy can&apos;t stop us!</p>
      <h2>Welcome {welcomeSuffix}</h2>
      <p>Welcome to Bebo 2. Bankruptcy can&apos;t stop us!</p>
      <h2>Welcome {welcomeSuffix}</h2>
      <p>Welcome to Bebo 2. Bankruptcy can&apos;t stop us!</p>
    </div>
  );
}
