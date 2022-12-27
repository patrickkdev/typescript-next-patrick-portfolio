import { Button, Card, Container, Grid } from '@mui/material'
import { SxProps } from '@mui/system'
import React, {CSSProperties} from 'react'
import { ColorPallete } from '../../utils/ColorPalette/ColorPalette'
import { StartUpProjectsModel } from '../../Content/Model'

const FeaturedProjectsSection = ({content}:{content: StartUpProjectsModel}) => {
    const headerStyle : CSSProperties = {
        padding: "12px",
        paddingTop: "114px",
        paddingBottom: "82px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    }
    
    const headerTextStyle: CSSProperties = {
        textAlign: "center",
        marginBottom: "24px",
        fontWeight: "bold",
        fontSize: "32px",
        color: ColorPallete.darkColor
    }

    const featureSectionStyle: SxProps = {
        display: "flex",
        //marginTop: "-160px",
        flexDirection: "row",
    }

    return (
        <div style={{backgroundColor: "white"}}>
        
        <div style={headerStyle}>
            <Container maxWidth="md">
                <h1 style={headerTextStyle}>{content.title}</h1>
                <h2 style={{...headerTextStyle, opacity: "0.9", fontWeight: 400, fontSize: "20px"}}>
                    {content.subtitle}
                </h2>
            </Container>
        </div>
        <Container maxWidth="lg" sx={featureSectionStyle}>
                <Grid container>
                   {content.projects.map(project => {return (
                        <Grid item key={content.projects.indexOf(project)} padding={"6px"} md={4} sm={6} xs={12}>
                            <Card elevation={10} style = {{height: "100%", color: "white", padding: "18px", borderRadius: 15, overflow: "hidden", backgroundColor:ColorPallete.secondaryColor, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                <img src={project.imageUrl} style={{width: "100%", height: "auto", marginBottom: "24px", borderRadius: 15}}/>
                                <h4 style={{marginBottom: "24px"}}>{project.title}</h4>
                                <h5 style={{marginBottom: "24px"}}>{project.subtitle}</h5>
                                <Button variant="outlined" onClick={() => window.open(project.actionLink, '_blank')} color="inherit" sx={{ borderRadius: 15}}> {/*  > */}
                                    Visit Page
                                </Button>
                            </Card>
                        </Grid>
                    )})}
                </Grid>
            </Container>
    </div>
  )
}

export default FeaturedProjectsSection