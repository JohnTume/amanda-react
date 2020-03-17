'use strict';
import React, {Component, useState} from 'react'; //import R
import Chart from './ChartsPage';

export class ParagraphFour extends React.Component {
    render() {
        return (
            <div>
            <h6 class='P_headers'>Statistics on Violence Between Couples</h6>
            <p className='respectYou' id='Statistics_on'> 
            Below are statistics on homocides committed in a relationship, over the years. Here are some things to note.
                <ul type = "square">
                    <li>Females have been a target for homocides by their partners.</li>
                    <p class = 'spacer'></p>
                    <li>The number of homocides of women have been decreasing historically since 1990.</li>
                    <p class = 'spacer'></p>
                    <li>The number of homocides of men have been increasing recently, however.</li>
                    <p class = 'spacer'></p>
                    <li>The general pattern of homocides of both men and women in relationships have followed a similar curve.</li>
                    </ul>
            </p>
            <Chart/>
            </div>
        )
    }
}
export default ParagraphFour;