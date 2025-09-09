import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ExplorePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>Welcome, {user.firstName || user.emailAddresses[0].emailAddress}!</div>
  );
}
