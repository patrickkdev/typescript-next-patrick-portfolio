import { CssBaseline } from '@mui/material'
import { AboutMeSection, CollabSection, Footer, Header, Navbar, FeaturedProjectsSection } from '../components'
import { ContentModel } from '../Content/Model'

import {useRouter} from 'next/router'
import Head from 'next/head';

export default function Home() {

    var HomePageContent: ContentModel = require('../Content/Languages/pt-br.json');

    const router = useRouter();

    if (router.query.language == undefined){
        return (<div>Carregando...</div>)
    }

    else if (router.query.language == "en-us") {
        HomePageContent = require('../Content/Languages/en-us.json');
    }

    return (
        <>
        <CssBaseline/>
        <Head>
            <title>Patrick Ferreira</title>
        </Head>
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
