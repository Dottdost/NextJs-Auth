"use client";
import { useUser, SignOutButton } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user } = useUser();

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
      <SignOutButton>
        <button>Sign Out</button>
      </SignOutButton>
    </div>
  );
}
