import { Html, Head, Main, NextScript } from 'next/document'
import { Header, Navbar } from '../components'
import { HomePageContent } from '../Content/StaticContent'

export default function Document() {
  return (
    <Html lang="en">
      <Navbar content={HomePageContent.navbarModel}/>
      <Head>
        <Header content={HomePageContent.headerModel}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
