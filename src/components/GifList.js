import React, {Component} from 'react';

export default class GifList extends Component {

  GifList = props => {
    return(
      <ul>
        {props.gifs.map((gif) =>
          <li key={gif.url}>
            <img src={gif.url} alt='gif'/>
          </li>
        )}
      </ul>
    )
  }
}
