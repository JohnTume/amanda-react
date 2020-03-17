'use strict';
import React, {Component, useState} from 'react'; //import R
import './style.css';

export default class aboutProject extends React.Component {
    render() {
        return (
            <div className="content-about-us">
                <h1 className="about-h1">About US <img src={require('../assets/aboutUS.png')} alt="Cute Snoopy" className='Snoopy'/></h1>
                <p id='P1'>
                    The idea of manipulation is often portrayed as something extreme on the 
                    <span>
                    <a href="http://www.seethetriumph.org/blog/the-media-and-stereotypes-about-abusive-relationships" class="media"> media</a>
                    </span>.
                    It challenges victims even to realize that they are involved in a manipulative
                    form of relationship. Regardless of one's gender, sexual orientation, and
                    ethnicity, everyone can be a victim of a
                    <span>
                    <a
                        href="https://psychologia.co/emotional-manipulation/"
                        class="media"
                        id="word"> manipulative relationship</a>.
                    </span>
                </p>

                <p id='P2'>
                  Currently, there are not many places to freely check or consult about the
                    manipulative relationship. Even though there are helpful articles, most of them
                    exist only as a form of a journal. As a result, it attracts less audience.
                    Another unaddressed problem is there are not many resources for the victims
                    outside of the romantic relationship.
                </p>

                <p id='P3'> 
                    Despite the prevalence of the manipulation
                    in a different form of the relationship, most website only focuses on the narrow
                    scenario of manipulation and provide support. We believe providing resources for
                    inclusive support group would encourage higher participation from users.
                </p>
            </div>
        )
    }
}