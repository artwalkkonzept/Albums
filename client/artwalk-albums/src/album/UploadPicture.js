import React, {useState} from "react";

function UploadPicture(props) {
  const [file, setFile] = useState();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div class="formContent">
      <label>Upload a picture to Gallery {props.album}</label><br/>
      <input type="file" name="uploadFile" onChange={handleFileChange}/><br/>
      <button type="submit" onClick={() => props.uploadPicture(file, props.album)}>Upload!</button>
    </div>
  );
}

export default UploadPicture;
