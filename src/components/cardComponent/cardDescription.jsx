import "../../index.css"

export default function CardDescription({children,...rest}) {
    return <p {...rest} className="card--description">{children}</p>
}