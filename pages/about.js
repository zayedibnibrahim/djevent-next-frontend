import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function AboutPage() {
  const router = useRouter()
  return (
    <Layout>
      <h1>Hello, This is about</h1>
      <Link href='/'>Home</Link>
    </Layout>
  )
}
