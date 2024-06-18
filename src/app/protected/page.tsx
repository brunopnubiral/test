import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome {session.user.name}</p>
      <p>Your access token is: {session.accessToken}</p>
      <p>Your user ID is: {session.user.id}</p>
    </div>
  );
}

