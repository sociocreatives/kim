import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import CategoryHeader from '@/components/Categories/CategoryHeader'
import JobsHome from '@/components/Jobs/JobsHome'


export default function Home() {
  return (
    <>
    <Head>
      <title>Mr. Kim | Home</title>
    </Head>
    <section>
        <Hero />
        <JobsHome />
        <CategoryHeader/>
    </section>
    </>
  )
}
