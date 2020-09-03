import Head from 'next/head'
import { Button } from 'antd';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </div>
  )
}
