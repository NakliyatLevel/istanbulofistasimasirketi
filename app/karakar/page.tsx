import { redirect } from 'next/navigation'
import { auth } from '@/auth'

export default async function AdminIndexPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/karakar/login')
  }

  redirect('/karakar/dashboard')
}
