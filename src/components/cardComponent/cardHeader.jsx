import "../../index.css"


export default function CardHeader({children,...rest}) {
    return <h1 {...rest} className="card--header">{children}</h1>
}