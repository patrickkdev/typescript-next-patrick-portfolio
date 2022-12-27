import React, { CSSProperties } from 'react'
import { HeaderModel } from '../Content/Model'
import { ColorPallete } from '../utils/ColorPalette/ColorPalette'

import hero_avatar from '../assets/images/hero_avatar.png'
import hero_devices from '../assets/images/hero_devices.png'

const Header = ({content}:{content: HeaderModel}) => {
    const mainStyle: CSSProperties = {
        backgroundColor: ColorPallete.primaryColor,
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        color: "black",
    }

    const heroBody: CSSProperties = {
        backgroundColor: ColorPallete.primaryColor,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "48px",
        paddingBottom: "48px",
        paddingRight: "24px",
        paddingLeft: "24px",
        width: "100%",
        color: "black",
        display: "flex",
    }

    const heroFoot: CSSProperties = {
        backgroundColor: ColorPallete.primaryColor,
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        display: "flex",
        width: "100%",
        color: "black",
    }

    const heroBodyH1: CSSProperties = {
        fontSize: "48px",
        fontWeight: "bold",
        marginBottom: "24px",
        textAlign: "center",
        color: ColorPallete.darkColor
    }

    const heroBodyImg: CSSProperties = {
        marginTop: "32px",
        marginBottom: "32px",
        height: "230px",
        width: "210px"
    }

    const heroFootImg: CSSProperties = {
        maxHeight: "350px",
        maxWidth: "100%"
    }
    
    console.log(hero_avatar.src)

    return (
        <div style = {mainStyle}>
            <div style={heroBody}>
                <h1 style={heroBodyH1}> {content.title} </h1>
                <h3 style={{...heroBodyH1, fontSize: "24px", fontWeight: 400, opacity: 0.7}}>{content.subtitle}</h3>

                <img style={heroBodyImg} alt="missing hero_avatar.png" src={hero_avatar.src}/>
            </div>
            <div style={heroFoot}>
                <img style={heroFootImg} alt="missing hero_devices.png" src={hero_devices.src}/>
            </div>
        </div>
    )
}

export default Header