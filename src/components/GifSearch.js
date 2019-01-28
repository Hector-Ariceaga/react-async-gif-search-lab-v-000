import React, {Component} from 'react';

export default class GifSearch extends Component {

  state = {
    query = ''
  }

  handleSubmit = () => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.query)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <Label>
        Enter a Search Term:</br>
        <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value} />
      </Label>
      <input type='submit' value='Find Gifs' />
      </form>
    )
  }
}
