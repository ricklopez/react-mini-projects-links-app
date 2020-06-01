import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Actions from './Actions';
import LinkLists from './ItemList';
import AddLinkForm from './AddLinkForm';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { // this changes => rerender
      time: Date.now(),
      navLinks: ['Link 1', 'Link 2', 'Link 3'],
      linkItems: [],
      showAddLink: false,
      submissionInProgress: false,
      value: 'title',
      newLink: {
        title: 'dsfdfdsfs',
      },
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  
  
  componentDidMount(){
    fetch('https://5eb88da0bb17460016b32946.mockapi.io/links')
      .then(response => response.json())
      .then(data => {
      this.setState({linkItems:data});
    });
  }
  
  handleClick(e){
    console.log(e);
    this.setState({showAddLink:true})
  }
  
  handleChangeTitle(e){    
    this.setState({newLink:{
      title: e.target.value
    }})
    
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.setState({submissionInProgress: true});
    fetch('https://5eb88da0bb17460016b32946.mockapi.io/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newLink)
    })
    .then(response => {
      this.setState({submissionInProgress: false});
      return response.json();
    })
    .then(data => {
     debugger;
      this.setState({showAddLink:false})
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    console.log(e);
  }
  
  
  actionUI(){
    debugger;
    if(!this.state.showAddLink)
    return (
      <Actions label={'Add New Link'} onClick={this.handleClick} />
    )
    
    return (
      <AddLinkForm onChangeTitle={this.handleChangeTitle} onSubmit={this.handleSubmit}/>
    )
  }
  
  
  
  render(){
      return (
        <div className="App">
          <div className="container">
          <div className="row">
            <div className="col">
               <Nav time={this.state.time } links={this.state.navLinks} />
                {this.actionUI()}
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
