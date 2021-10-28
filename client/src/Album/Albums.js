import React from 'react';
import {Link} from "@reach/router"
import CreateAlbum from './CreateAlbum';

function Albums(props) {
  return (
    <>
      <h3>Albums</h3>
      <div className="album-container">
        {props.albums.map((element, index) => 
         
              <Link to={`${element.name}`} key={index}><li>{element.name}</li></Link>
           
        )}
      </div>
      <CreateAlbum createAlbum={props.createAlbum}></CreateAlbum>
    </>
  );
}

export default Albums;