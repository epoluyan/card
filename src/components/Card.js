import React from 'react';

function Card({title, text, link, children = null}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link.address} className="btn btn-primary">{link.name}</a>
      </div>
    </div>
  );
}

export default Card;
