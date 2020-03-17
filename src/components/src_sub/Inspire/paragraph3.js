'use strict';
import React, {Component, useState} from 'react'; //import R

export class ParagraphThree extends React.Component {
    render() {
        return (
            <div>
                <h4 class='P_headers'>When Things Get Violent</h4>
                <p className='respectYou' id='When_things'>
                    Sometimes, a manipulative relationship can turn physically abusive and can lead to acts
                    of violence being committed by the aggressor. One must always be well-informed and should
                    know how to spot the early signs for potential violence by a partner in a relationship.
                </p>
                <h5 class='sub_headers'> Does your partner:</h5>
                <ul id = 'violence_signs' type = "square">
                    <li>have a bad and unpredictable temper?</li>
                    <p class = 'spacer'></p>
                    <li>hurt you, or threaten to hurt or kill you?</li>
                    <p class = 'spacer'></p>
                    <li>"threaten to take your children away or harm them?</li>
                    <p class = 'spacer'></p>
                    <li>threaten to commit suicide if you leave?</li>
                    <p class = 'spacer'></p>
                    <li>force you to have sex?</li>
                    <p class = 'spacer'></p>
                    <li>destroy your belongings?</li>
                    </ul>
            </div>
        )
    }
}
export default ParagraphThree;