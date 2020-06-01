import React from 'react';

function Actions(props) {
  return (
      <div className="actions-bar  my-3">
          <button type="button" onClick={props.onClick} className="btn btn-primary btn-lg btn-block">Block level button</button>  
      </div>
  );
}

export default Actions;
