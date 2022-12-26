import { CssBaseline } from '@mui/material'
import { AboutMeSection, CollabSection, Footer, RecentWorkSection, StartUpProjectsSection } from '../components'
import { HomePageContent } from '../Content/StaticContent'

export default function Home() {

  return (
    <>
      <CssBaseline/>
      <main>
        <AboutMeSection content={HomePageContent.aboutMeModel}/>
        {/* <RecentWorkSection content={HomePageContent.recentWorkModel}/> */}
        <StartUpProjectsSection content={HomePageContent.startUpProjectsModel}/>
        <CollabSection content={HomePageContent.collabWithMeModel}/>
      </main>
      
      <footer>
        <Footer content={HomePageContent.footerModel}/>
      </footer>
    </>
  )
}
