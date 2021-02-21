import React from 'react'

const ButtonTakePicture = () => {
    return (
        <div className="bg">
          <div className="card-frame-empty">
            
            <button onClick={() => console.log('Hola')} className="button-background">
              TAKE PICTURE
            </button>
          </ div>

        </div>
    )
}

export default ButtonTakePicture;