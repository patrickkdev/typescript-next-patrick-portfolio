import { CssBaseline } from '@mui/material'
import { AboutMeSection, CollabSection, Footer, Header, Navbar, FeaturedProjectsSection } from '../components'
import { ContentModel } from '../Content/Model'

import {useRouter} from 'next/router'

export default function Home() {

    var HomePageContent: ContentModel = require('../Content/Languages/pt-br.json');

    const router = useRouter();
    //const id = router.query.id? parseInt(router.query.id as string, 10) : parseInt("0");
    console.log(router.query.language);

    if (router.query.language == undefined){
        return (<div>Carregando...</div>)
    }

    else if (router.query.language == "en-us") {
        HomePageContent = require('../Content/Languages/en-us.json');
    }

    return (
        <>
        <CssBaseline/>
        <Navbar content={HomePageContent.navbarModel}/>
        <Header content={HomePageContent.headerModel}/>
        <main>
            <AboutMeSection content={HomePageContent.aboutMeModel}/>
            <FeaturedProjectsSection content={HomePageContent.startUpProjectsModel}/>
            <CollabSection content={HomePageContent.collabWithMeModel}/>
        </main>
        
        <footer>
            <Footer content={HomePageContent.footerModel}/>
        </footer>
        </>
    )
}
