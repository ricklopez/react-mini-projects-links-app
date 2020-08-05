import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Actions from './Actions';
import ItemList from './ItemList';
import AddLinkForm from './AddLinkForm';
import env from './config';
import Fuse from 'fuse.js';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      links : [],
      displayForm: false,
    };
    
    //this.onClick = this.onClick.bind(this);
    
  }
  
  
  componentDidMount(){
    //
    fetch(env.ENDPOINT)
      .then(response => response.json())
      .then(data => {
        console.log("Line 24: ", this.state);
        this.setState({ links : data }, () => { 
          console.log("Line 25: ", this.state);
        });
    });
  }
  
  actionUI(){
    if(this.state.displayForm){
      return(    
         <AddLinkForm/>
      );
    }
    return(
      <Actions onClick={this.onClick.bind(this)}/>   
    );
  }
  
  onClick(e) {
    this.setState({displayForm: true});
  }
  
  onChange(e) {
    e.preventDefault();
   
    
    const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        keys: [
          "title",
          "description"
        ]
      };
    
  
      const fuse = new Fuse(this.state.links, options);

      // Change the pattern
      const q = e.target.value;

      const result = fuse.search(q).map((i) => i.item);
    
      this.setState({links: result}); 

  }
    
  
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
           <Nav/>
           {this.actionUI()}
            <input onChange={(e) => this.onChange(e)}/>
           
           <ItemList items={this.state.links}/>
          </div>
        </div>
      </div>
    </div>
  );
    
  }
  
  
}

export default App;
