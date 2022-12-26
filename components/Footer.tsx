import React, { CSSProperties } from 'react'

import { ColorPallete } from '../utils/ColorPalette/ColorPalette'
import { SxProps, Typography } from '@mui/material'
import { FooterModel } from '../Content/Model'

const mainStyle: CSSProperties = {
    backgroundColor: ColorPallete.secondaryColor,
    flexDirection:"column",
    justifyContent: "center",
    paddingTop: "32px",
    paddingBottom: "32px",
    paddingLeft: "24px",
    paddingRight: "24px",
    display: "flex",
    color: "black",
    flex: 1
}

const TitleStyle: CSSProperties = {
  textAlign:"center",
  fontSize: "20px",
  marginBottom: "12px",
  color: ColorPallete.primaryColor
}
const SubtitleStyle: CSSProperties = {
  textAlign:"center",
  marginBottom: "24px",
  fontSize: "20px",
  color: ColorPallete.primaryColor
}
const ActionButtonStyle: SxProps = {
  width: "250px", marginTop: "24px", borderRadius: "25px", backgroundColor:ColorPallete.secondaryColor, color: ColorPallete.primaryColor,
  "&:hover": {
      backgroundColor: ColorPallete.secondaryColor,
  },
  transitionDuration: "0.4s",
  transitionProperty: "padding, background-color"
}

const Footer = ({content}:{content:FooterModel}) => {
  return (
    <div style={mainStyle}>
        <h1 style={TitleStyle}>{content?.title}</h1>
        <h1 style={{...TitleStyle, marginBottom: "0px"}}>{content?.subtitle}</h1>
        {/* <h6 style={{textAlign: "center", color: ColorPallete.primaryColor}}> Made by me © 2022 </h6> */}
    </div>
  )
}

export default Footer