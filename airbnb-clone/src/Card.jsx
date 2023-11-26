/* eslint-disable react/prop-types */
export default function Card(props) {
    console.log(props)
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <p className="card-badge">{badgeText}</p>}
            <img className="card-photo" src={`src/assets/images/${props.item.coverImg}`} alt="activity exemple" />
            <div className="card-stats">
                <img className="card-star" src="src/assets/images/Star.png" alt="rating" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}