import React from 'react';
import {Link} from "@reach/router"
import CreateAlbum from './CreateAlbum';

const APP_URL = process.env.REACT_APP_URL;
const hr = {
  maxWidth: 270,
  marginLeft: 0,
}

function Albums(props) {
  return (
    <>
      <h3>Create an Album</h3>
      <div className="album-container">
        {props.albums.map((element, index) => 
          <div className="album-box">
         
              <Link to={`${element.name}`} key={index}>{element.name}</Link>
           
          </div>
        )}
      </div>
      <hr style={hr}/>
      <CreateAlbum createAlbum={props.createAlbum}></CreateAlbum>
    </>
  );
}

export default Albums;
