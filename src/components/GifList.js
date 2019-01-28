import React from 'react';

export default const GifList = props => {
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
