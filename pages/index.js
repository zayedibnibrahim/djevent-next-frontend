import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <h2>This is home</h2>
      <Link href='/about'>About</Link>
    </Layout>
  )
}
