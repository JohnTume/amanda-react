'use strict';
import React, {Component, useState} from 'react'; //import R
import Chart2 from './ChartsPage2.js';
export class ParagraphOne extends React.Component {
    render() {
        return (
            <div>
                <h2 class='P_headers'>#Yourself</h2>
                <p className='respectYou' id='respectYou'>
                    Perhaps you are suffering and struggling from a manipulative, and possibly abusive relationship.
                    If you are, feelings of emptiness and difficulty will unconsciously and conciously follow you.
                    It's time for all of us to think about how we can prevent abusive and manipulative encounters and
                    situations in life. 
                    <ul type = "square">
                        <li>Among other tactics, the first steps we need to take is to focus, be truthful, 
                    and respectful to oneself.</li>
                    <p class = 'spacer'></p>
                    <li>Reflecting on both the positive and negative actions one has taken in a relationship is essential.
                    Evaluate these things and embrace yourself afterwards.</li>
                    <p class = 'spacer'></p>
                    <li>"Embrace" means not only to accept oneself - it also means to believe one can progress and continute to become a better
                    version of oneself.</li>
                    </ul>
                </p>
                <Chart2/>

            </div>
        )
    }
}
export default ParagraphOne;