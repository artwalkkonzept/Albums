import React from 'react';
import {Link} from "@reach/router"
import CreateAlbum from './CreateAlbum';

const APP_URL = process.env.REACT_APP_URL;

function Albums(props) {
  return (
    <>
      <h5>Albums</h5>
      <div className="album-container">
        {props.albums.map((element, index) => 
          <div className="album-box">
         
              <Link to={`${element.name}`} key={index}>{element.name}</Link>
           
          </div>
        )}
      </div>
      <CreateAlbum createAlbum={props.createAlbum}></CreateAlbum>
    </>
  );
}

export default Albums;
