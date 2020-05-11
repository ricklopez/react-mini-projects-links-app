import React from 'react';

function LinkLists(props) {
  const list = props.items.map(() => {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center link-item">
        Cras justo odio
        <span className="badge badge-primary badge-pill">14</span>
      </li>
    );
  });
  return (
    <h4 className="display-4">My Links</h4>
    <ul className="list-group">
      {list}
    </ul>
  );
}

export default LinkLists;
