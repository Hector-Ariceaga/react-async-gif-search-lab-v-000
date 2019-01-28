import React, {Component} from 'react';

export default class GifSearch extends Component {

  state = {
    input = ''
  }

  handleChange = () => {
    this.setState({
      input: value
    })
  }

  render(){
    return(
      <form onSubmit={() => this.props.onSearchSubmit(this.state.input)}>
      <Label>
        Enter a Search Term:</br>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
      </Label>
      <input type='submit' value='Find Gifs' />
      </form>
    )
  }
}
