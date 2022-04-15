import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
      <title>Blog</title>
      <meta name='keywords' content='Blog'/>
    </Head>
    <div className='container'>
      <Image src="/logo.png" width={120} height={70} alt="" />
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, a! Repellat nihil amet ad? Debitis voluptatibus, accusantium assumenda, maiores perspiciatis repellendus necessitatibus fugiat minima harum voluptatum expedita modi molestiae quos?</p>
      <button className='btn btn-primary'>Get Started</button>
    </div>
    </>
  )
}
