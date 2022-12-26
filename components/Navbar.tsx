import Link from 'next/link'

import React, { CSSProperties } from 'react'
import { Button, Container, Typography, SxProps } from '@mui/material'

import { ColorPallete } from '../utils/ColorPalette/ColorPalette'
import { NavbarModel } from '../Content/Model'


const Navbar = ({content}:{content: NavbarModel}) => {
  const mainStyle: CSSProperties = {
    backgroundColor: ColorPallete.primaryColor,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "126.38px",
    padding: "19.2px",
    display: "flex",
    color: "black",
    flex: 1
  }
  
  const containerStyle: SxProps = {
    display:"flex", justifyContent:"space-between"
  }
  
  const contactButtonStyle: SxProps = {
    backgroundColor: ColorPallete.secondaryColor, borderRadius: "25px", height: "40px", alignSelf:"center",
    marginX: "12px",
    '&:hover': {
      backgroundColor: ColorPallete.accentColor,
      color: "black",
      paddingLeft: "30px",
      paddingRight: "30px"
    },
    transitionDuration: "0.4s",
    transitionProperty: "padding, color, background-color"
  }
  
  const curriculumButtonStyle: SxProps = {
    color: ColorPallete.secondaryColor, borderRadius: "25px", height: "40px", alignSelf:"center",
    marginX: "12px",
    '&:hover': {
      backgroundColor: ColorPallete.accentColor,
      color: "black",
      paddingLeft: "30px",
      paddingRight: "30px"
    },
    transitionDuration: "0.4s",
    transitionProperty: "padding, color, background-color"
  }

  return (
    <div style={mainStyle}>
        <Container sx={containerStyle}>
          <Link href="/">
            <img style={{height: "50px "}} src="https://www.pngitem.com/pimgs/m/62-621035_png-letter-p-p-logo-transparent-background-png.png"/>
          </Link>
          <div>
            <a href={content.contactButtonLink} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" size='large' sx={contactButtonStyle}> {content.contactButton} </Button>
            </a>
            <Button size='large' sx={curriculumButtonStyle}> {content.resume} </Button>
          </div>
        </Container>
    </div>
  )
}

export default Navbar