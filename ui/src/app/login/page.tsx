"use client";

import { useRouter } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

export default async function Page() {
  const router = useRouter()
  function handleLogin() {
    router.replace('/login/auth?token=1234', RedirectType.replace )
  }

  return <>
    <h1>Login</h1>
    <button onClick={handleLogin}>Login</button>
  </>
}