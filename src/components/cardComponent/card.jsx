import "../../index.css"

export default function Card({children, ...rest}){
    return (
        <div {...rest} className="card--main">
            {children}
        </div>
    )
}