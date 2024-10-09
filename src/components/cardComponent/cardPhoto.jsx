

export default function CardPhoto({img,...rest}) {
    return (
        <div {...rest} className="card--photo">
            <img src={img}/>
        </div>
    )
}