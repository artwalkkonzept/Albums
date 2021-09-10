import React, {useState, useEffect} from 'react';
import {Link} from "@reach/router"

const APP_URL = process.env.REACT_APP_URL;

function CreateAlbum(props) {
  const [input, setInput] = useState();

  return (
    <div className="formContent">
      <h3>New album</h3>
      <input type="text" name="album" placeholder="album name" 
        onChange={event => setInput(event.target.value)}/><br/>
      <button onClick={() => props.createAlbum(input)}>Create</button>
    </div>
  );
}

export default CreateAlbum;
