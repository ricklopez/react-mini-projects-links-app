import React from 'react';

function AddLinkForm(props) {
  return (
    <div className="row justify-content-center">
      <form className="form-inline col-md-8 m-auto text-center">
        <div className="form-group mb-2">
          <input type="text" readonly className="form-control-plaintext " id="staticEmail2" value="email@example.com"/>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Add Link</button>
      </form>
    </div>
  );
}

export default AddLinkForm;
