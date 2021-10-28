import React, {useState} from 'react';

const APP_URL = process.env.REACT_APP_URL;

function UploadPicture(props) {
  const [file, setFile] = useState();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div class="formContent">
      <label>Upload a picture</label><br/>
      <input type="file" name="uploadFile" onChange={handleFileChange}/><br/>
      <button type="submit" onClick={() => props.uploadPicture(file, props.album)}>Upload!</button>
    </div>
  );
}

export default UploadPicture;
