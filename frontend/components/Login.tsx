import React from "react";

import { auth, signIn, signOut } from "@/auth";
const Login = () => {
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
};

export default Login;
