import React from 'react';

function ItemList(props) {
  const itemUI = props.items.map( item => {
    return (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center link-item">
        {item.title}
       <span className=""><small>{item.description}</small></span>
        <span className="badge badge-primary badge-pill">{item.likes}</span>
      </li>
    )
  });
  
  return (
    <div>
        <h4 className="display-4">My Links</h4>
        <ul className="list-group">
          {itemUI}
        </ul>
    </div>
);
}

export default ItemList;
