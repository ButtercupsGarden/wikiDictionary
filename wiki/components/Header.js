import Head from 'next/head'

export default function Header({children, title}) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        {children}
      </main>
    </div>
  )
}
