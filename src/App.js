import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Actions from './Actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  render(){
    
    return (
      <div className="App">
        <div className="container">
        <div className="row">
          <div className="col">
             <Nav time={Date.now()}/>
             <Actions/>
                <div className="links-list  my-3">
                  <h4 className="display-4">My Links</h4>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center link-item">
                      Cras justo odio
                      <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center link-item">
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center link-item">
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
 
}

export default App;
