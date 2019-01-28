import React, {Component} from 'react';

export default class GifList extends Component {

  render(){
    <ul>
      {this.props.gifs.map((gif,id) => <li key={id}>{gif}</li>)}
    </ul>
  }
}