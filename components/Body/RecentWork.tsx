import { Button, Card, Container, Grid, SxProps } from '@mui/material'
import React, { CSSProperties } from 'react'
import { RecentWorkModel } from '../../Content/Model'
import { ColorPallete } from '../../utils/ColorPalette/ColorPalette'

const RecentWork = ({content}:{content: RecentWorkModel}) => {

    const MainDivStyle: CSSProperties = {
        backgroundColor: ColorPallete.primaryColor,
        paddingBottom: "144px",
        paddingTop: "144px",
    }
    
    const MainContainerStyle: SxProps = {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display:"flex",
    }

    const TitleTextStyle: CSSProperties = {
        marginBottom: "24px",
        textAlign:"center"
    }

    return (
        <div style={MainDivStyle}>
            <Container maxWidth="lg" sx={MainContainerStyle}>
                <h1 style={{...TitleTextStyle, fontSize: "32px"}}>{content.title}</h1>
                <h2 style={{...TitleTextStyle, fontSize: "20px"}}>{content.subtitle}</h2>
            
                <Grid container>
                   {content.recentWorks.map(recentWork => {return (
                        <Grid item key={content.recentWorks.indexOf(recentWork)} padding={"6px"} md={4} sm={6} xs={12}>
                            <Card elevation={10} style = {{borderRadius: "15px", overflow: "hidden", aspectRatio: 16/12}}>
                                <img style={{width:"auto", height:"100%", objectFit:"cover"}} alt="Work" src={recentWork.imageLink}/>
                            </Card>
                        </Grid>
                    )})}
                </Grid>
            </Container>
        </div>
    )
}

export default RecentWork