import React from 'react';

function Nav(props) {
  
  const ulLinks = props.links.map( link => {
    return (
      <li className="nav-item">
          <a className="nav-link active" href="#">{link}</a>
      </li>
    )
  });
  
  return (
    <div className="nav my-3">
      <ul className="nav mx-auto">
        {ulLinks}
        <li className="nav-item">
          <a className="nav-link disabled" href="#">{ props.time}</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
