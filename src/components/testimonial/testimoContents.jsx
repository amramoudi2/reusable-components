import comma from "../../assets/cumma.png"


export default function TestimoContents({children,addComma = true,...rest}){
    return (
        <div {...rest}>
            {addComma && <img className="comma" src={comma}/>}
            {children}
        </div>
    )
}