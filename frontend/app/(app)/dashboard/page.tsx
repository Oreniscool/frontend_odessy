import { auth } from "@/auth";
import LoggedInDashboard from "@/components/LoggedInDashboard";

export default async function Dashboard() {
  const session = await auth();
  console.log(session);
  return (
    <div className="min-h-screen bg-[#F8F9FB] pl-72">
      {session && session?.user ? (
        <LoggedInDashboard session={session}></LoggedInDashboard>
      ) : (
        <div>log out</div>
      )}
    </div>
  );
}
