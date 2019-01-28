import React, {Component} from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../compoonents/GifSearch.js'

export default class GifListContainer extends Component{
  state = {
    gifs = []
    query = undefined
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSearchSubmit={this.onSearchSubmit}
      </div>
    )
  }

  onSearchSubmit = (input) => {
    this.setState({
      query: input
    })
  }

  componentDidMount() {
    query = this.state.query
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      gifs = data.slice(0,2)
      urls = gifs.images.original.url
      this.setState({
        gifs: urls
      })
    })
  }
}
