import React from "react";
import p3 from "../images/p3.svg";

export default function StageThree() {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bde8f1" fill-opacity="1" d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,90.7C480,75,549,53,617,80C685.7,107,754,181,823,224C891.4,267,960,277,1029,256C1097.1,235,1166,181,1234,170.7C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    <div
      id="stage3"
      className="col-12 bg-primary d-flex flex-column align-items-center"
      style={{ minHeight: "100vh", maxWidth: "100vw" }}
    >
      <div className="col-12 col-sm-10 d-flex flex-column-reverse flex-sm-row" style={{minHeight: "100vh", maxWidth: "100vw"}}>
        <div className="col-12 col-sm-6 p-3 py-4 d-flex flex-column justify-content-center">
          <h2 className="text-dark fw-bold">Stage 3: UNIQUE MECHANISM</h2>
          <ul className="text-dark px-4">
            <li className="pb-1">
              Finding out what makes your product stand out, what is that factor
              you have that separates it from your competitors? That’s your
              UNIQUE MECHANISM. Knowing your product’s unique mechanism and
              letting your customers know what that is – will make the
              difference in your marketing.
            </li>
            <li className="pb-1">
              Magic words: ‘Have this tea with Amazonian Bark proven to increase
              your metabolism and lose weight after just 7 days! — the key here
              is the unique mechanism which says that your tea has an Amazonian
              Bark ingredient (others don’t have that) which helps increase
              metabolism.
            </li>
            <li className="pb-1">
              Your unique mechanism is, in context, considered the secret weapon
              your product carries that could attract and convert your
              customers. It also shows its difference from the other products in
              your niche. Basically, it’s showing how unique your product is.
              Not just unique – unique but differently unique.
            </li>
            <li className="pb-1">
              This final stage of sophistication, your marketing must identify
              and focus on your customer’s perspectives for it to be effective.
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 p-3 d-flex flex-column align-items-center justify-content-center pt-5 mt-5 pt-sm-0 mt-sm-0">
          <img src={p3} alt="Marketing man" className="col-12" />
        </div>
      </div>
    </div>
    </>
  );
}
