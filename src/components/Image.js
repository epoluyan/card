import React from 'react';

function Image({link, text}) {
  return (
    <React.Fragment>
      <img src={link} className="card-img-top" alt={text} style={{width: '18rem'}}></img>
    </React.Fragment>
  );
}
  
export default Image;
