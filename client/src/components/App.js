import React from 'react';
import ParallaxEffect from './ParallaxEffect';
import '../styles/app.css';

class App extends React.Component {
  render() { 
    return (
      <div className="app-container">
        <ParallaxEffect />
      </div>  
    );
  }
}
 
export default App;