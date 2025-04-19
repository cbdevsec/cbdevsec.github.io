import React from 'react';
import Typewriter from "typewriter-effect";
import './../Pages/home.css';

function Typetitle() {
    return (
        <div className="type">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Cybersecurity Analyst")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Front-end Dev")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Ethical Hacker")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Loves Cats")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Cybersecurity Analyst")
                        .start();
                }}
            />
        </div>
    );
}

export default Typetitle;