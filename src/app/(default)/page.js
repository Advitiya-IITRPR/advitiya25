import ClientHome from '@/components/ClientHome'
import { cookies } from 'next/headers'

export default async function Home() {
  // Await cookies as it might be dynamic
  const cookieStore = await cookies()
  
  // Get the 'hasVisited' cookie
  const hasVisitedCookie = cookieStore.get('hasVisited')
  
  // Convert the cookie value to a boolean
  const hasVisited = !!hasVisitedCookie

  // Pass the value to your client component
  return <ClientHome initialHasVisited={hasVisited} />
}
