import React from 'react'

interface ButtonTakePictureProps {
  openCamera: () => void
}

const ButtonTakePicture = ({openCamera}: ButtonTakePictureProps) => {
    return (
        <div className="bg">
          <div className="card-frame-empty">
            
            <button onClick={openCamera} className="button-background">
              TAKE PICTURE
            </button>
          </ div>

        </div>
    )
}

export default ButtonTakePicture;