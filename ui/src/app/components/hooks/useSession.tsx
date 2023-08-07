import { cookies } from "next/headers";

interface Props {
  onUnauthenticated?: (fn: void) => void,
  required?: boolean
}

type AuthenticationResult = {
  token?: string,
  isAuthenticated: boolean
}

const useSession = ({ required = true, onUnauthenticated }: Props): AuthenticationResult => {
  const token = cookies().get('token')
  const isAuthenticated = token

  if (required && onUnauthenticated && !isAuthenticated) {
    onUnauthenticated()
    return {
      isAuthenticated: false
    }
  }

  return {
    token,
    isAuthenticated
  }
}

export default useSession