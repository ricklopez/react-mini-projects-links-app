import React from 'react';

function AddLinkForm(props) {
  return (
    <div>
      <form className="form" onSubmit={props.onSubmit} >
        <div className="form-group mx-sm-8 mb-2"> 
          <input type="text" onChange={props.onChangeTitle} className="form-control" id="inputLink" placeholder="Add Link"/>
        </div>
        <button type="submit" className="btn btn-outline-primary btn-lg btn-block">Submit</button>
      </form>
      <p>{}</p>
    </div>
  );
}

export default AddLinkForm;
