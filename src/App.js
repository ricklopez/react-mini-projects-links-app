import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Actions from './Actions';
import LinkLists from './ItemList';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { // this changes => rerender
      time: Date.now(),
      navLinks: ['Link 1', 'Link 2', 'Link 3'],
      linkItems: [],
      
    }
  }
  
  
  componentDidMount(){
    fetch('https://5eb88da0bb17460016b32946.mockapi.io/links')
      .then(response => response.json())
      .then(data => {
      this.setState({linkItems:data});
    });
  }
  
  
  
  render(){
      return (
        <div className="App">
          <div className="container">
          <div className="row">
            <div className="col">
               <Nav time={this.state.time } links={this.state.navLinks} />
               <Actions/>
                  <div className="links-list  my-3">
                    <LinkLists items={this.state.linkItems}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    
  }

}

export default App;
