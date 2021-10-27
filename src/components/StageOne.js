import React from 'react'
import p1 from '../images/p1.svg';

export default function StageOne() {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bde8f1" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,197.3C320,224,400,256,480,277.3C560,299,640,309,720,277.3C800,245,880,171,960,160C1040,149,1120,203,1200,229.3C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div id="stage1" className="col-12 d-flex flex-column align-items-center justify-content-center bg-primary" style={{minHeight: '100vh', maxWidth: '100vw'}}>

          <div className="col-12 col-sm-6 p-3 d-flex flex-column align-items-center justify-content-end mb-3 pt-5 mt-5 pt-sm-0 mt-sm-0">
            <img src={p1} alt="Marketing man" className="col-12"/>
          </div>

          <div className="col-12 col-sm-6 p-3 py-4 d-flex flex-column justify-content-center">
            <h2 className="text-dark fw-bold">Stage 1: THE PIONEER STAGE</h2>
            <ul className="text-dark px-4">
              <li className="pb-1">It simply means that your product is new enough that it only needs to be placed out there so it can be known by your market.</li>
              <li className="pb-1">Magic words: ‘Have this tea and Lose weight!’. — with those, you can get the attention of a lot of people.</li>
              <li className="pb-1">But as time progresses and more competitors join you in creating diet teas, those simple words get lost in the world of competition.</li>
              <li className="pb-1">So you need to move ahead of them and show that your diet tea is the best by emphasizing your product’s promises. This is stage two.</li>
            </ul>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bde8f1" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,240C672,235,768,181,864,165.3C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </>
    )
}
