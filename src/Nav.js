import React from 'react';

function Nav(props) {
  const links = props.links.map(() => {
    return (
      <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
    );
  });
  return (
    <div className="nav my-3">
      <ul className="nav mx-auto">
        {links}
      </ul>
    </div>
  );
}

export default Nav;
