import React, {Component} from 'react';

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

  onSearchSubmit = () => {
    
  }

  componentDidMount() {
    query = this.state.query
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => 
      gifs = data.slice(0,2)
      urls = gifs.images.original.url
      this.setState({
        gifs: urls
      })
    )
  }
}