import { Button, SxProps } from '@mui/material'
import { subtle } from 'crypto'
import React, { CSSProperties } from 'react'
import { CollabWithMeModel } from '../../Content/Model'
import { ColorPallete } from '../../utils/ColorPalette/ColorPalette'

const CollabSection = ({content}:{content:CollabWithMeModel}) => {

    const TitleStyle: CSSProperties = {
        textAlign:"center",
        marginBottom: "24px",
        fontSize: "32px"
    }
    const SubtitleStyle: CSSProperties = {
        textAlign:"center",
        marginBottom: "24px",
        fontSize: "20px",
        opacity: 0.7
    }
    const ActionButtonStyle: SxProps = {
        height: "46px",
        width: "250px", marginTop: "24px", borderRadius: "25px", backgroundColor:ColorPallete.secondaryColor, color: ColorPallete.primaryColor,
        "&:hover": {
            backgroundColor: ColorPallete.secondaryColor,
        },
        transitionDuration: "0.4s",
        transitionProperty: "padding, background-color"
    }

  return (
    <div style={{backgroundColor: ColorPallete.primaryColor, paddingTop: "144px", paddingBottom: "144px", paddingLeft: "24px", paddingRight: "24px",  display: "flex", alignItems:"center", justifyContent: "center", flexDirection:"column"}}>
        <h2 style={TitleStyle}>{content.title}</h2>
        <h3 style={SubtitleStyle}>{content.subtitle}</h3>
        <Button variant="contained" onClick={() => window.open(content.actionButtonLink, '_blank')} sx={ActionButtonStyle}>
            {content.actionButtonText}
        </Button>
    </div>
  )
}

export default CollabSection