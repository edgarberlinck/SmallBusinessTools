import useSession from "@/app/components/hooks/useSession";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: 'Invoices'
  }
}

export default function Page () {
  useSession({
    onUnauthenticated: () => redirect('/login')
  })
  return <h1>Invoices</h1>
}