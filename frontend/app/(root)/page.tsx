import { signIn } from "@/auth";
export default function LandingPage() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit">Login</button>
    </form>
  );
}
