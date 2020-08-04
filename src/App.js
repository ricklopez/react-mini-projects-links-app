import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Actions from './Actions';
import ItemList from './ItemList';
import AddLinkForm from './AddLinkForm';

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
    fetch(process.env.REACT_APP_API_URL)
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
    
  
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
           <Nav/>
           {this.actionUI()}
           
           <ItemList items={this.state.links}/>
          </div>
        </div>
      </div>
    </div>
  );
    
  }
  
  
}

export default App;
