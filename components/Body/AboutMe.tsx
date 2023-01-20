
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SettingsIcon from '@mui/icons-material/Settings';
import { Card, Container, Grid } from '@mui/material'
import { SxProps } from '@mui/system'
import React, {CSSProperties} from 'react'
import { ColorPallete } from '../../utils/ColorPalette/ColorPalette'
import { AboutMeModel } from '../../Content/Model'


const AboutMeSection = ({content}:{content:AboutMeModel}) => {
    const headerStyle : CSSProperties = {
        padding: "24px",
        paddingTop: "96px",
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
        //padding: "24px",
        marginTop: "-140px",
        borderRadius: "15px",
    }
    
    const featureColumnItemStyle: CSSProperties = {
        border: "2px solid",
        borderColor: ColorPallete.accentColor,
        color: "white", 
        padding: "18px", 
        borderRadius: 15, 
        overflow: "hidden", 
        backgroundColor: ColorPallete.secondaryColor, 
        display:"flex", 
        flexDirection:"column", 
        alignItems: "center",
        justifyContent:"space-between",
        height:"100%"
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
                <h2 style={{...headerTextStyle, opacity: "0.9", fontWeight: 100, fontSize: "19px", marginBottom:"0px"}}>
                    {content.subtitle}
                </h2>
                <h2 style={{...headerTextStyle, opacity: "0.9", fontWeight: 100, fontSize: "20px", marginBottom:"48px"}}>
                    {content.subtitle2}
                </h2>
            </Container>
        </div>
        <Container maxWidth="lg">
            <Grid container sx={featureSectionStyle}>
                {content.features.map(feature => {return (
                    <Grid item key={content.features.indexOf(feature)} padding={"6px"} sm={6} xs={12}>
                        <Card elevation={10} style = {featureColumnItemStyle}>
                            <div style={featureColumnItemIconStyle}> 
                                {content.features.indexOf(feature) == 0 && <ViewQuiltIcon style={{color: ColorPallete.darkColor, fontSize: "36px",}}/>}
                                {content.features.indexOf(feature) == 1 && <SettingsIcon style={{color: ColorPallete.darkColor, fontSize: "36px",}}/>}
                             </div>
                             <div>
                                <h2 style={featureColumnItemH2Style}> {feature.title} </h2>
                                    {feature.technology.technologies?.map(technology => {return(
                                        <h3 key={feature.technology.technologies.indexOf(technology)} style={{...featureColumnItemH2Style, fontWeight: 400, marginBottom: "0px"}}> {technology} </h3>    
                                        )})}
                            </div>
                            
                        </Card>
                    </Grid>
                )})}
            </Grid>
        </Container>
        {/* <div style={{padding: "24px"}}>
            <Container maxWidth="lg" >
                
            </Container>
        </div> */}
    </div>
  )
}

export default AboutMeSection