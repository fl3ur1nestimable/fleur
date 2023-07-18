import "./MobileFleur.css"
import React from "react";

class MobileFleur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    copydiscord = () => {
        let text = "fl3ur1nestimable";
        navigator.clipboard.writeText(text);
    }

    displaySelectedM = (color) => {
        let text = document.getElementById("textpick");
        text.style.display = "none";
        let fleurpage = document.getElementById("fleurpageM");
        fleurpage.style.transitionDuration = "1s";
        let noir = document.getElementById("menunoir");
        let jaune = document.getElementById("menujaune");
        let blue = document.getElementById("menublue");
        let brown = document.getElementById("menubrown");
        let conts = document.getElementsByClassName("cont");
        for (let i = 0; i < conts.length; i++) {
            conts[i].style.display = "none";
        }
        switch (color) {
            case "noir":
                noir.style.border = "2px solid white";
                noir.style.transform = "translate(0,-50%)";
                noir.style.opacity = "100%";
                fleurpage.style.backgroundColor = "black";
                let others = [jaune, blue, brown]
                others.forEach(element => {
                    element.style.border = "none";
                    element.style.transform = "translate(0,0)";
                    element.style.opacity = "50%";
                });
                let contnoir = document.getElementById("contnoir");
                contnoir.style.display = "flex";
                break;

            case "jaune":
                jaune.style.border = "2px solid white";
                jaune.style.transform = "translate(0,-50%)";
                jaune.style.opacity = "100%";
                fleurpage.style.backgroundColor = "#FFDE59";
                let others2 = [noir, blue, brown]
                others2.forEach(element => {
                    element.style.border = "none";
                    element.style.transform = "translate(0,0)";
                    element.style.opacity = "50%";
                });
                let contjaune = document.getElementById("contjaune");
                contjaune.style.display = "flex";
                break;

            case "blue":
                blue.style.border = "2px solid white";
                blue.style.transform = "translate(0,-50%)";
                blue.style.opacity = "100%";
                fleurpage.style.backgroundColor = "#5CE1E6";
                let others3 = [jaune, noir, brown]
                others3.forEach(element => {
                    element.style.border = "none";
                    element.style.transform = "translate(0,0)";
                    element.style.opacity = "50%";
                });
                let contblue = document.getElementById("contblue");
                contblue.style.display = "flex";
                break;

            case "brown":
                brown.style.border = "2px solid white";
                brown.style.transform = "translate(0,-50%)";
                brown.style.opacity = "100%";
                fleurpage.style.backgroundColor = "#863B0B";
                let others4 = [jaune, blue, noir]
                others4.forEach(element => {
                    element.style.border = "none";
                    element.style.transform = "translate(0,0)";
                    element.style.opacity = "50%";
                });
                let contbrown = document.getElementById("contbrown");
                contbrown.style.display = "flex";
                break;
        }
    }

    render() {
        return (
            <>
                {
                    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.screen.availHeight < window.screen.availWidth ) ? (
                        <div id="messageLandscape">
                            <p>/!\ Please turn your phone to portrait mode. /!\</p>
                        </div>)
                        :
                        (
                            <div id='fleurpageM'>
                                <div id="picfraise">
                                    <img id="fraiseM" src="strawberryfull.png" alt="fraise" />
                                </div>
                                <div id='textpickM'>
                                    <p id='textpick'>Hi.<br></br>Pick your poison.</p>
                                </div>
                                <div id="contnoir" className="whitetxt cont">
                                    <h1>Fl3ur_1nestimable</h1>
                                    <p>Hi! Welcome to Fl3ur_1nestimable's page.<br></br>Take a seat, drink some thea.<br></br> Enjoy your life.<br></br></p>
                                </div>
                                <div id="contjaune" className="blacktxt cont">
                                    <h1>Socials</h1>
                                    <p>I try my best to share the things I do. Spread it to bring happiness and smiles to others :)<br></br>
                                        I'm not very active everywhere, but hey, do not hesitate to DM me or just come and see! (Discord : click to copy ID)<br></br></p>
                                    <div id='socd'>
                                        <div id='instad'>
                                            <a href="https://www.instagram.com/fleur_inestimable/" target="_blank"><img id='inst' src="insta.png" alt="instagram" /></a>
                                        </div>
                                        <div id='discordd'>
                                            <img id='discor' src="discord.png" alt="discord" onClick={() => this.copydiscord()} />

                                        </div>
                                        <div id='twitchd'>
                                            <a href="https://www.twitch.tv/fl3ur_1nestimable" target="_blank"><img id='twitc' src="twitch.png" alt="twitch" /></a>
                                        </div>
                                        <div id='ytbd'>
                                            <a href="https://www.youtube.com/@fl3ur_1nestimable" target="_blank"><img id='yt' src="ytb.png" alt="youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div id="contblue" className="blacktxt cont">
                                    <h1 id='titleblue'>Sports</h1>
                                    <p id='textblue'>I love sports.</p>
                                    <p>I practised different sports during my childhood and in middle/high school.</p>
                                    <p>Such as swimming, handball, volleyball. I love climbing and gymnastics. Currently, I'm mainly focused on <a style={{ color: 'black', fontWeight: 'bold' }} href="https://en.wikipedia.org/wiki/Calisthenics#Common_exercises" target="_blank">Calisthenics</a> and Cardio.</p>
                                    <p>I'm also a dancer. Shuffle, Batchata, Hip Hop, Rock, and maybe more ! If you wanna talk sports, I'm here :)</p>
                                </div>
                                <div id="contbrown" className="whitetxt cont">
                                    <h1 id='titlebrown'>Music</h1>
                                    <p>I Can't live without music.</p><p>I'm a musician, currently playing/learning piano and drums, I want to play as many instruments as possible, and become a jazz musician.</p><p>I like jazz, electro, swing, latino, and more, improvising, just playing what I love, and of course, have fun! If you want to play with me or do something, contact me !</p>
                                    <p>I'm also a music producer, in the learning phase :D</p>
                                    <p><a href="https://open.spotify.com/artist/3ruacNrPgm29H566SxwbhP?si=Z3a38XAcRyizq5YNJPKfkg" style={{ color: 'white', fontWeight: 'bold' }} target="_blank">Check my Spotify page !</a></p>
                                </div>
                                <div id='menu'>
                                    <button id='menunoir' onClick={() => this.displaySelectedM("noir")}></button>
                                    <button id='menubrown' onClick={() => this.displaySelectedM("brown")}></button>
                                    <button id='menublue' onClick={() => this.displaySelectedM("blue")}></button>
                                    <button id='menujaune' onClick={() => this.displaySelectedM("jaune")}></button>
                                </div>
                            </div>
                        )
                }
            </>
        )
    }

}

export default MobileFleur;