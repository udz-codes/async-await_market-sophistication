import React from 'react'
import mainPageImage from '../images/mainPageImage.svg';

export default function MainPage() {
    return (
      <div className="col-11 col-sm-10 d-flex flex-column-reverse flex-sm-row" style={{minHeight: '100vh', maxWidth: '100vw'}}>

        <div className="col-12 col-sm-6 p-3 py-4 d-flex flex-column justify-content-center">
          <h1 className="text-dark fw-bold">Market Sophistication</h1>
          <p className="h2 text-info fw-light">It is the level of awareness or sophistication your market has regarding the services or products you sell – in relation to your competitors who also offer the same services or products such as yours.</p>
        </div>

        <div className="col-12 col-sm-6 p-3 d-flex flex-column align-items-center justify-content-center">
          <img src={mainPageImage} alt="Marketing man" className="col-11 col-sm-8"/>
        </div>

      </div>
    )
}
