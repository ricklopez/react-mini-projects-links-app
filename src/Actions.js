import React from 'react';

function Actions(props) {
  return (
    <div className="actions-bar  my-3">
          <button type="button" onClick={props.onClick} className="btn btn-primary btn-lg btn-block"> + {props.label}</button>  
      </div>
  );
}

export default Actions;
