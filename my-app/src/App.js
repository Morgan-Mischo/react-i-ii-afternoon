import React, {Component } from 'react';
import Header from './Components/Header'; 
import MainContent from './Components/MainContent'; 
import './Components/Style.css'; 

class App extends Component {
  render() {
  return (
    <div className='App'>
      <Header />
      <MainContent />
    </div>
    
  );
}
}

export default App;
