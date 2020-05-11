import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Actions from './Actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now(),
      navlinks: [],
      links: [],
    };
  }
  
  
  componentDidMount() {
    this.setState({navlinks: ['link 1', 'link 2', 'link 3', 'link 4']});
    // after element are in the DOM
    fetch('https://5eb88da0bb17460016b32946.mockapi.io/links')
      .then(response => response.json())
      .then(data => {
      console.log(this.state);
      this.setState({links: data}, function(){
        console.log(this.state);
      });
      console.log(this.state);
      
    })
  }
  

  
  render(){
    
    return (
      <div className="App">
        <div className="container">
        <div className="row">
          <div className="col">
             <Nav time={this.state.date} links={this.state.navlinks}/>
             <Actions/>
                <div className="links-list  my-3">
                  <LinkList items={this.state.navlinks}/>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
 
}

export default App;
