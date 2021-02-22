import React, {useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ButtonTakePicture from './components/ButtonTakePicture';
import CameraView from './components/CameraView';
import {ResType} from './services/api' 



function App() {

  const [open, setOpen] = useState(false)
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [results, setResults] = useState<ResType >()

  return open ? (
    <>
  <NavBar />
      <div className="center">
      
        <CameraView 
          closeCamera={() => setOpen(!open)}
          imgSrc={imgSrc}
          setImgSrc={(newImgSrc) => setImgSrc(newImgSrc)}
          results={results}
          setResults={(newResults) => setResults(newResults)}
        />
      </div>

    </>



) : (
      <div className="body">
        
          <NavBar />
        
          <div className="center">
          <h1 className="scan-your-id"> Scan your ID </h1>
        
        
        <h1 className="take-a-picture-it-m">Take a picture.
           It may take time to validate your personal information.</h1>

          {imgSrc === null ? (

            <ButtonTakePicture openCamera={() => setOpen(!open)} />

          ) : (
            <>
            <img
                src={imgSrc}
                className={
                  results?.summary.outcome !== "Approved" ? "border-red" : "border-green"
                }
                />

              <div
                
              >
                {results?.summary.outcome === "Approved" ? (
                  <h1 className="text-green">ACCEPTED</h1>
                ) : (
                  <h1 className="text-red">REJECTED</h1>
                )}
              </div>
            
            <button onClick={() => setOpen(!open)} className="button-background">
              RETAKE PICTURE
            </button>

            </>

            // { results?.summary.outcome === 'Approved' ? (

            // ) : (


            // )}
            
            
          )}
          
          
      </div>
   </div>
   


  )
}

export default App;
