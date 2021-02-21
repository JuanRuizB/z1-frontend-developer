import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ButtonTakePicture from './components/ButtonTakePicture';



function App() {
  return (
      <div className="body">
        
          <NavBar />
        
          <div className="center">
          <h1 className="scan-your-id"> Scan your ID </h1>
        
        
        <h1 className="take-a-picture-it-m">Take a picture.
           It may take time to validate your personal information.</h1>

          <ButtonTakePicture />
      </div>
   </div>
  );
}

export default App;
