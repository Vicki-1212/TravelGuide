import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PlaceList from './Components/PlaceList'
import './App.css'

class App extends Component {
  state = {placeList: [], isLoading: true}

  componentDidMount() {
    this.getApicall()
  }

  getApicall = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.packages.map(eachList => ({
        id: eachList.id,
        name: eachList.name,
        imageUrl: eachList.image_url,
        description: eachList.description,
      }))
      this.setState({placeList: updatedData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccesView = () => {
    const {placeList} = this.state 
    return (
      <ul className="place-list-container">
        {placeList.map(eachList => (
          <PlaceList key={eachList.id} placeDetails={eachList} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? this.renderLoadingView() : this.renderSuccesView()}
      </div>

    )
  }
}

export default App
