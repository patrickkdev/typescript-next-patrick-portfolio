import Link from 'next/link'

import React, { CSSProperties } from 'react'
import { Button, Container, SxProps } from '@mui/material'

import { ColorPallete } from '../utils/ColorPalette/ColorPalette'
import { NavbarModel } from '../Content/Model'

import logo from '../assets/images/logo.png'

const Navbar = ({content}:{content: NavbarModel}) => {
  const mainStyle: CSSProperties = {
    backgroundColor: ColorPallete.primaryColor,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "114px",
    padding: "18px",
    display: "flex",
    color: "black",
    flex: 1
  }
  
  const containerStyle: SxProps = {
    display:"flex", justifyContent:"space-between"
  }
  
  const contactButtonStyle: SxProps = {
    backgroundColor: ColorPallete.secondaryColor, borderRadius: "25px", height: "40px", alignSelf:"center",
    marginRight: "12px",
    '&:hover': {
      backgroundColor: ColorPallete.accentColor,
      color: "black",
      boxShadow: "0px 2px 10px grey"
    },
    transitionDuration: "0.4s",
    transitionProperty: "color, background-color, box-shadow"
  }
  
  const curriculumButtonStyle: SxProps = {
    color: ColorPallete.secondaryColor, borderRadius: "25px", height: "40px", alignSelf:"center",
    marginX: "12px",
    '&:hover': {
      boxShadow: "0px 2px 10px grey"
    },
    transitionDuration: "0.4s",
    transitionProperty: "box-shadow"
  }

  return (
    <div style={mainStyle}>
        <Container sx={containerStyle}>
          <Link href="/" style={{overflow:"hidden", flexWrap:"wrap", flexDirection: "column"}}>
            <img style={{height: "50px ", margin: "12px"}} src={logo.src}/>
          </Link>
          <div style={{display:"flex", alignItems: "center"}}>
            <a href={content.contactButtonLink} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" size='large' sx={contactButtonStyle}> {content.contactButton} </Button>
            </a>
            
            <Link href = 'documents/CV - Patrick Ferreira.pdf' target='_blank'>
              <Button size='large' sx={curriculumButtonStyle}> {content.resume} </Button>
            </Link> 

          </div>
        </Container>
    </div>
  )
}

export default Navbar