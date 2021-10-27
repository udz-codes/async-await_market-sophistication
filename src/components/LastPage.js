import React from "react";
// import p4 from "../images/p4.png";

export default function StageThree() {
  return (
    <div
      id="stage3"
      className="col-12 d-flex flex-row page4 flex-wrap justify-content-center"
      style={{ minHeight: "100vh", maxWidth: "100vw" }}
    >
      <div className="col-12 p-0 m-0" style={{position: 'absolute', verticalAlign: 'top'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bde8f1" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,240C672,235,768,181,864,165.3C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
        <div className="col-11 col-sm-6 darkBlurBack p-4 shadow rounded text-center align-self-end mb-5">
            <h1 className="text-info fw-bold">To know more about Market Sophistication</h1>
            <a className="btn btn-primary text-info shadow-sm border border-info mt-4 rounded-pill fw-bold"
            href="https://theknowledgegym.com/market-sophistication-and-the-unique-mechanism-in-marketing/"
            target="_blank" rel="noreferrer">Click Here</a>
        </div>
    </div>
  );
}