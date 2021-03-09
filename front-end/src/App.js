import React, { Component } from 'react';
/*import logo from './component/logo.svg';
import logotwo from './component/logo-two.svg';*/
import logothree from './component/logo-three.svg';
import './stylesheet/App.css';
import './stylesheet/Body.css';
import Body from './component/Body';


class App extends Component {
  
  constructor(props){

    super(props);
    this.state={apiResponse:""};

  }

  callAPI(){

    fetch("http://172.30.224.5:9001/connectAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));

  }


  componentWillMount(){

   this.callAPI();

  }
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
         {/*  <img src={logo} className="App-logo" alt="logo" />
          <img src={logotwo} className="App-logo-three" alt="logo" /> 
         */} 
      
         <h1>Percy_v2</h1>
        {/* <img src={logothree} className="App-logo-two" alt="logo" />  
         <img src={logothree} className="App-logo-two-bis" alt="logo" />  
          
          */} 
        </div>
        <p className="App-intro">
        {this.state.apiResponse}
        </p>  
        
        <div>
        <Body></Body>  
            
        </div>

        
        
      </div>
      

    );
  }
}

export default App;
