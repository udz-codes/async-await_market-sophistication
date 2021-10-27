import React from 'react'
import p2 from '../images/p2.svg';

export default function StageTwo() {
    return (
        <div id="stage2" className="col-11 col-sm-10 d-flex flex-column flex-sm-row pt-3" style={{minHeight: '100vh', maxWidth: '100vw'}}>
            <div className="col-12 col-sm-6 p-3 d-flex flex-column align-items-center justify-content-center pt-5 mt-5 pt-sm-0 mt-sm-0">
                <img src={p2} alt="Marketing man" className="col-12"/>
            </div>

            <div className="col-12 col-sm-6 p-3 py-4 d-flex flex-column justify-content-center">
            <h2 className="text-dark fw-bold">Stage 2: OUT-DOING THE COMPETITION</h2>
            <ul className="text-dark px-3">
                <li className="pb-1">Meaning, you differentiate your products from the rest of your competitors by expanding your original claim.</li>
                <li className="pb-1">Magic words: ‘Have this tea and Lose weight after one week!’ — you’ve added in some things to emphasize and strengthen your original statement… giving big, bold promises.</li>
                <li className="pb-1">In this Stage 2, your competitions make claims that are so big that you can’t outbid them (or out claim them) without sounding false and ridiculous.</li>
                <li className="pb-1">Say, your competitor says, “Drink our tea and Lose weight in 6 days”. You can’t use that same marketing style. And you can’t also say “Have our tea and lose weight in 7 minutes” for this (and you) will sound so ridiculous just because you try to outdo your competitor’s claim.</li>
            </ul>
            </div>
        </div>
    )
}