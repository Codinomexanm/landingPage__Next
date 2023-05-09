import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Container from '@/components/Container'
import Heads from '@/components/Header/Head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <Heads />
        <Container />
      </main>
    </>
  )
}
