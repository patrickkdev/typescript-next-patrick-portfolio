import React, { CSSProperties } from 'react'
import { HeaderModel } from '../Content/Model'
import { ColorPallete } from '../utils/ColorPalette/ColorPalette'


const Header = ({content}:{content: HeaderModel}) => {
    const mainStyle: CSSProperties = {
        backgroundColor: ColorPallete.primaryColor,
        alignItems: "center",
        flexDirection: "column",
        //minHeight: "100vh",
        paddingTop: "12px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingBottom: "0px",
        display: "flex",
        color: "black",
    }

    const heroBody: CSSProperties = {
        backgroundColor: ColorPallete.primaryColor,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "48px",
        paddingBottom: "48px",
        paddingRight: "48px",
        paddingLeft: "48px",
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
        marginBottom: "24px"
    }

    const heroBodyImg: CSSProperties = {
        marginTop: "32px",
        marginBottom: "32px",
        height: "230px",
        width: "210px"
    }

    const heroFootImg: CSSProperties = {
        height: "350px"
    }

    return (
        <div style = {mainStyle}>
            <div style={heroBody}>
                <h1 style={heroBodyH1}> {content.title} </h1>
                <h3 style={{...heroBodyH1, fontSize: "24px", fontWeight: 100, opacity: 0.7}}>{content.subtitle}</h3>

                <img style={heroBodyImg} src="https://mattfarley.ca/img/mf-avatar.svg"/>
            </div>
            <div style={heroFoot}>
                <img style={heroFootImg} src="https://mattfarley.ca/img/hero-devices.svg"/>
            </div>
        </div>
    )
}

export default Header