import React, {useState} from "react";

function CreateAlbum(props) {
  const [input, setInput] = useState();

  return (
    <div class="formContent">
      <label>Select Album name</label>
      <br />
      <input type="text" name="album" placeholder="album name" 
        onChange={event => setInput(event.target.value)}/><br/>
      <button onClick={() => props.createAlbum(input)}>Create</button>
    </div>
  );
}

export default CreateAlbum;
