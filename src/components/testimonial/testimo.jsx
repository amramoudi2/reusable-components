import React from 'react';

const TestimoContext = React.createContext(false);

export default function Testimo({children,color,...rest}){

    const [hasLogo,setHasLogo] = React.useState( false);

    function itHasLogo(){
        setHasLogo(true);
    }

    return (
        <TestimoContext.Provider value={{hasLogo,itHasLogo}}>
            <div {...rest}
                        style={{background:color}}
                        className={`testimo ${hasLogo ? "testimo--logo" : ""}`}
                >
                {children}
            </div>
        </TestimoContext.Provider>
    )
}

export {TestimoContext}