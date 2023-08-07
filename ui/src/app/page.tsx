import { redirect } from "next/navigation";
import { Metadata } from "next";
import useSession from "@/app/components/hooks/useSession";

export const metadata: Metadata = {
  title: 'Invoices'
}

export default async function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { token, isAuthenticated } = useSession({
    required: true,
    onUnauthenticated: () => redirect('/login')
  })

  return (
    <>
      <h1>Main</h1>
      <span>{ String(token) }</span>
    </>
  )
}
