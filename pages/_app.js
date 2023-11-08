
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const metadata = {
  title: 'Mr. Kim',
  description: 'Mr. Kim | Home',
}

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
        })
  }, [])

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    
  )
}
