import React from "react";
import {TestimoContext} from "./testimo.jsx"


export default function InfoTestimo({name,position, color = "#2e59f3",...rest}){

    const {hasLogo} = React.useContext(TestimoContext)

    if (!name){
        throw new Error('No name provided');
    }
    console.log(hasLogo)

    return (
        <>
            {!hasLogo && <div>
            <p style={{fontWeight:"bold"}} className="info">{name}</p>
            {position && <p className="info">{position}</p>}
            </div>}

            {hasLogo && <div className="paragraph--info--div">
                <p className="paragraph--info">
                    <span className="name" style={{fontWeight:"lighter"}}>{name}</span>
                    <span style={{color:"#a0a5ae"}}>{position}</span>
                </p>
            </div>}
        </>
    )
}