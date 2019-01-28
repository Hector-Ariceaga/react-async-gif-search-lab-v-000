import React, {Component} from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../compoonents/GifSearch.js'

export default class GifListContainer extends Component{
  state = {
    gifs = []
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSearchSubmit={this.onSearchSubmit}
      </div>
    )
  }

  onSearchSubmit = () => {
    
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        gifs: data.map(gif => ({url: gif.images.original.url}))
      })
    })
  }
}
