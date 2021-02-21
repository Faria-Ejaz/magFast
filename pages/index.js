import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container">
          <a href="http://localhost:3000/LaunchEvent">LaunchEvent</a>
          <br></br>
          <a href="http://localhost:3000/checkout-selector/">CheckoutSelector</a>

      </main>
    </div>
  )
}
