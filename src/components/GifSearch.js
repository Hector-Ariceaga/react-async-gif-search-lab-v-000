import React, {Component} from 'react';

export default class GifSearch extends Component {

  state = {
    input = undefined
  }

  handleChange = () => {
    this.setState({
      input: value
    })

    }
  }

  render(){
    return(
      <input type="text" value={this.state.input} onChange={this.handleChange} >
    )
  }
}
