import React, {useRef, useEffect} from 'react'
import Webcam from 'react-webcam'
import {evaluatePicture , ResType} from '../../services/api' 
import './index.css'


  interface ModalCamProps {
    closeCamera: () => void;
    imgSrc: string | null;
    setImgSrc: (newImgSrc: string | null) => void;
    results: ResType | undefined;
    setResults: (newResults: ResType) => void;
  }

const CameraView = ({
    closeCamera,
    imgSrc,
    setImgSrc,
    results,
    setResults
  }: ModalCamProps) => {
    
        const webcamRef = useRef<Webcam>(null);
      
        const capture = React.useCallback(
          () => {
              if(webcamRef.current){
                const image = webcamRef.current.getScreenshot();
                setImgSrc(image)
              }
          },
          [webcamRef, setImgSrc]
        );

        useEffect(() => {
          const interval = setInterval(() => {
            capture();
          }, 2000);
          return () => clearInterval(interval);
        }, [capture]);

        useEffect(() => {
          if (imgSrc) {
            (async () => {
              const res = await evaluatePicture(imgSrc);
              setResults(res);
              console.log(res?.summary.outcome)
              if (res?.summary.outcome === "Approved") {
                closeCamera();
              }
              
            })();
          }
        }, [imgSrc]);
      
        return (
          <div className="center"> 

            <h1 className="scan-your-id"> Scan your ID </h1>
            <h1 className="take-a-picture-it-m">Take a picture.
           It may take time to validate your personal information.</h1>
           <div>
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className={
                results?.summary.outcome !== "Approved" ? "border-red" : "border-green"
              }
            />
            </div>
              {results?.summary.outcome !== undefined &&
            <h1 className={ results?.summary.outcome !== "Approved" ? "textC-red" : "textC-green"}>
          {results?.summary.outcome}</h1>
              }

            <button className="button-cancel" onClick={closeCamera}>CANCEL</button>
            
          </ div >
        );
      
}

export default CameraView;
