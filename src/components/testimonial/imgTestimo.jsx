import {TestimoContext} from "./testimo.jsx"
import React from "react";

export default function ImgTestimo({img,className,logo,...rest}){

    const {hasLogo,itHasLogo} = React.useContext(TestimoContext)

    if(!img && !logo){
        throw new Error('imgTestimo requires an image or a logo')
    }

    if(logo){
        itHasLogo()
    }

    return <img className={`${hasLogo ? "logo--img" : "testimo--img"} ${className}`} {...rest} src={img || logo}/>
}