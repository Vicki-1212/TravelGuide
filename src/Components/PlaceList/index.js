import './index.css'

const PlaceList = props => {
  const {placeDetails} = props
  const {id, name, imageUrl, description} = placeDetails
  return (
    <li className="place-list-items">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="place-heading">{name}</h1>
      <p className="place-description">{description}</p>
    </li>
  )
}

export default PlaceList
