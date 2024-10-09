import React from "react";
import {TestimoContext} from "./testimo.jsx"

export default function ParagraphTestimo({children,textColor, ...rest}){

    const {hasLogo} = React.useContext(TestimoContext)

    console.log(hasLogo)

    return (
        <div {...rest}>
            <p className={`testimo--text ${hasLogo ? "testimo--text--logo" : ''}`} style={{color:textColor}}>{children}</p>
        </div>
    )
}