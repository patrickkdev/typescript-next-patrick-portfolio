
import JavascriptIcon from '@mui/icons-material/Javascript'
import CssIcon from '@mui/icons-material/Css'
import { Container } from '@mui/material'
import { SxProps } from '@mui/system'
import React, {CSSProperties} from 'react'
import { ColorPallete } from '../../utils/ColorPalette/ColorPalette'
import { AboutMeModel } from '../../Content/Model'


const AboutMeSection = ({content}:{content:AboutMeModel}) => {
    const headerStyle : CSSProperties = {
        padding: "24px",
        paddingTop: "122px",
        paddingBottom: "144px",
        backgroundColor: ColorPallete.secondaryColor,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    }
    
    const headerTextStyle: CSSProperties = {
        color: "white",
        textAlign: "center",
        marginBottom: "24px",
        fontWeight: "bold",
        fontSize: "32px"
    }
    
    const featureSectionStyle: CSSProperties = {
        display: "flex",
        marginTop: "-244px",
        borderRadius: "15px",
        backgroundColor: ColorPallete.primaryColor,
        flexDirection: "row",
        border: "1px solid",
        borderColor: ColorPallete.darkColor
    }
    
    const featureColumnItemStyle: CSSProperties = {
        paddingTop: "45px",
        paddingBottom: "45px",
        paddingRight: "24px",
        paddingLeft: "24px",
        width: `calc(100%/${content.features.length})`,
        alignItems:"center",
        flexDirection:"column",
        display:"flex",
    }
    
    const featureColumnItemIconStyle: CSSProperties = {
        backgroundColor: ColorPallete.accentColor,
        justifyContent:"center", 
        borderRadius: "100%",
        marginBottom: "24px",
        alignItems:"center",
        display:"flex", 
        height: 70, 
        width: 70, 
    }
    
    const featureColumnItemH2Style: CSSProperties = {
        display: "flex",
        textAlign: "center",
        alignItems: "center",   
        marginBottom: "12px",
        justifyContent: "center",
        color: ColorPallete.primaryColor,
        fontSize: "20px"
    }
  return (
    <div style={{backgroundColor: "white"}}>
        
        <div style={headerStyle}>
            <Container maxWidth="md">
                <h1 style={headerTextStyle}>{content.title}</h1>
                <h2 style={{...headerTextStyle, opacity: "0.9", fontWeight: 100, fontSize: "20px", marginBottom:"0px"}}>
                    {content.subtitle}
                </h2>
                <h2 style={{...headerTextStyle, opacity: "0.9", fontWeight: 100, fontSize: "20px", marginBottom:"48px"}}>
                    {content.subtitle2}
                </h2>
                <div style={{display:"flex"}}>
                <div style={featureColumnItemStyle}>
                    <div style={featureColumnItemIconStyle}> <CssIcon style={{fontSize: "36px",}}/> </div>
                    <h2 style={featureColumnItemH2Style}> {content.features[0].title} </h2>
                    <h3 style={{...featureColumnItemH2Style, fontWeight: 100}}> {content.features[0].subtitle} </h3>

                    {content.features[0].technology.technologies?.map(technology => {return(
                        <h3 key={content.features[0].technology.technologies.indexOf(technology)} style={{...featureColumnItemH2Style, fontWeight: 100, margin: "0px"}}> {technology} </h3>    
                    )})}
                </div>
                <div style={{width:"1px", backgroundColor:ColorPallete.primaryColor}}/>
                <div style={featureColumnItemStyle}>
                    <div style={featureColumnItemIconStyle}> <JavascriptIcon style={{fontSize: "36px",}}/> </div>
                    <h2 style={featureColumnItemH2Style}> {content.features[1].title} </h2>
                    <h3 style={{...featureColumnItemH2Style, fontWeight: 100}}> {content.features[1].subtitle} </h3>

                    {content.features[1].technology.technologies?.map(technology => {return(
                        <h3 key={content.features[1].technology.technologies.indexOf(technology)} style={{...featureColumnItemH2Style, fontWeight: 100, margin: "0px"}}> {technology} </h3>    
                    )})}
                </div>
                    
                </div>
            </Container>
        </div>
        {/* <div style={{padding: "24px"}}>
            <Container maxWidth="lg" sx={featureSectionStyle}>
                
            </Container>
        </div> */}
    </div>
  )
}

export default AboutMeSection