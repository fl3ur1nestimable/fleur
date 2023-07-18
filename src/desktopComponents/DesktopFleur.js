import "./DesktopFleur.css"
import React from "react";

class DesktopFleur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        let fleurpage = document.getElementById("fleurpage");
        fleurpage.style.backgroundColor = "unset";
    }

    copydiscord = () => {
        let text = "fl3ur1nestimable";
        navigator.clipboard.writeText(text);
    }

    rotatePetale = () => {
        let petale = document.getElementById("petale");
        petale.style.animation = "rotate 1s linear";
        setTimeout(() => {
            petale.style.animation = "none";
        }, 1000);
    }

    displaySelected = (color) => {

        if (color === "noir" || color === "blue") {
            let wings = document.getElementsByClassName("wing");
            for (let i = 0; i < wings.length; i++) {
                wings[i].style.display = "block";
                wings[i].style.animation = "opacityAnim 1s linear";
            }
            let roses = document.getElementsByClassName("rose");
            for (let i = 0; i < roses.length; i++) {
                roses[i].style.display = "none";
            }
            let bluediv = document.getElementById("blue");
            bluediv.style.display = "flex";
        }
        else if (color === "jaune" || color === "brown") {
            let wings = document.getElementsByClassName("wing");
            for (let i = 0; i < wings.length; i++) {
                wings[i].style.display = "none";
            }
            let bluediv = document.getElementById("blue");
            bluediv.style.display = "none";
        }

        let content = document.querySelectorAll("[class*='content']");
        content.forEach(element => {
            element.style.display = "none";
        });
        let fleurpage = document.getElementById("fleurpage");
        fleurpage.style.transitionDuration = "1s";
        switch (color) {
            case "noir":
                let noir = document.getElementById("petalenoir");
                noir.style.border = "2px solid white";
                noir.style.transform = "translate(50%,-15%) rotate(45deg)";
                noir.style.opacity = "100%";
                fleurpage.style.backgroundColor = "black";
                let jaune = document.getElementById("petalejaune");
                let blue = document.getElementById("petaleblue");
                let brown = document.getElementById("petalebrown");
                let others = [jaune, blue, brown];
                others.forEach(element => {
                    element.style.border = "none";
                    element.style.opacity = "50%";
                });
                jaune.style.transform = "translate(0,-50%) rotate(45deg)";
                blue.style.transform = "translate(-50%,0) rotate(45deg)";
                brown.style.transform = "translate(0,-50%) rotate(45deg)";
                let noircontent = document.getElementsByClassName("blackcontent");
                for (let i = 0; i < noircontent.length; i++) {
                    noircontent[i].style.display = "block";
                    noircontent[i].style.animation = "opacityAnim 1s linear";
                }
                break;

            case "jaune":
                let jaune2 = document.getElementById("petalejaune");
                jaune2.style.border = "2px solid white";
                jaune2.style.transform = "translate(-15%,-50%) rotate(45deg)";
                jaune2.style.opacity = "100%";
                fleurpage.style.backgroundColor = "#FFDE59";
                let noir2 = document.getElementById("petalenoir");
                let blue2 = document.getElementById("petaleblue");
                let brown2 = document.getElementById("petalebrown");
                let others2 = [noir2, blue2, brown2];
                others2.forEach(element => {
                    element.style.border = "none";
                    element.style.opacity = "50%";
                });
                noir2.style.transform = "translate(50%,0) rotate(45deg)";
                blue2.style.transform = "translate(-50%,0) rotate(45deg)";
                brown2.style.transform = "translate(0,-50%) rotate(45deg)";
                let rose = document.getElementById("rose");
                rose.style.display = "block";
                let otherrose = document.getElementById("rose2");
                otherrose.style.display = "none";
                let jaunecontent = document.getElementsByClassName("yellowcontent");
                for (let i = 0; i < jaunecontent.length; i++) {
                    jaunecontent[i].style.display = "block";
                    jaunecontent[i].style.animation = "opacityAnim 1s linear";
                }
                break;

            case "blue":
                let blue3 = document.getElementById("petaleblue");
                blue3.style.border = "2px solid white";
                blue3.style.transform = "translate(-50%,15%) rotate(45deg)";
                blue3.style.opacity = "100%";
                fleurpage.style.backgroundColor = "#5CE1E6";
                let jaune3 = document.getElementById("petalejaune");
                let noir3 = document.getElementById("petalenoir");
                let brown3 = document.getElementById("petalebrown");
                jaune3.style.transform = "translate(0,-50%) rotate(45deg)";
                noir3.style.transform = "translate(50%,0) rotate(45deg)";
                brown3.style.transform = "translate(0,-50%) rotate(45deg)";
                let others3 = [jaune3, noir3, brown3];
                others3.forEach(element => {
                    element.style.border = "none";
                    element.style.opacity = "50%";
                });
                let bluecontent = document.getElementsByClassName("bluecontent");
                for (let i = 0; i < bluecontent.length; i++) {
                    bluecontent[i].style.display = "block";
                    bluecontent[i].style.animation = "opacityAnim 1s linear";
                }
                break;

            case "brown":
                let brown4 = document.getElementById("petalebrown");
                brown4.style.border = "2px solid white";
                brown4.style.transform = "translate(15%,-50%) rotate(45deg)";
                brown4.style.opacity = "100%";
                fleurpage.style.backgroundColor = "#863B0B";
                let jaune4 = document.getElementById("petalejaune");
                let blue4 = document.getElementById("petaleblue");
                let noir4 = document.getElementById("petalenoir");
                jaune4.style.transform = "translate(0,-50%) rotate(45deg)";
                blue4.style.transform = "translate(-50%,0) rotate(45deg)";
                noir4.style.transform = "translate(50%,0) rotate(45deg)";
                let others4 = [jaune4, blue4, noir4];
                others4.forEach(element => {
                    element.style.border = "none";
                    element.style.opacity = "50%";
                });
                let rose4 = document.getElementById("rose");
                rose4.style.display = "none";
                let otherrose4 = document.getElementById("rose2");
                otherrose4.style.display = "block";
                let browncontent = document.getElementsByClassName("browncontent");
                for (let i = 0; i < browncontent.length; i++) {
                    browncontent[i].style.display = "block";
                    browncontent[i].style.animation = "opacityAnim 1s linear";
                }
                break;
        }
        let picks = document.querySelectorAll('[id="pick"]');
        picks.forEach(pick => {
            pick.style.display = "none";
        });
        let pickp = document.getElementById("pickp");
        pickp.style.display = "none";
    }


    render() {
        return (
            <>
                <div id='fleurpage'>
                    <div id='noir'>
                        <h1 id='pick' className="pre bl">Hi.</h1>
                        <div className="blackcontent whitetext">
                            <h1 id='titlenoir'>Fl3ur_1nestimable</h1>
                            <p id='textnoir'>Hi! Welcome to Fl3ur_1nestimable's page.<br></br>Take a seat, drink some thea.<br></br> Enjoy your life.<br></br></p>
                        </div>
                    </div>
                    <div id='jaune'>
                        <h1 id='pick' className="pre yw">Pick</h1>
                        <div className="yellowcontent blacktext">
                            <h1 id='titlejaune'>Socials</h1>
                            <p id='textjaune'>I try my best to share the things I do. Spread it to bring happiness and smiles to others :)<br></br>
                                I'm not very active everywhere, but hey, do not hesitate to DM me or just come and see!<br></br></p>
                            <div id='socdiv'>
                                <div id='instadiv'>
                                    <a href="https://www.instagram.com/fleur_inestimable/" target="_blank"><img id='insta' src="insta.png" alt="instagram" /></a>
                                </div>
                                <div id='discorddiv'>
                                    <img id='discord' src="discord.png" alt="discord" onClick={() => this.copydiscord()} />
                                    <h4 id='dtext'>fl3ur_1nestimable<br></br>(click to copy)</h4>

                                </div>
                                <div id='twitchdiv'>
                                    <a href="https://www.twitch.tv/fl3ur_1nestimable" target="_blank"><img id='twitch' src="twitch.png" alt="twitch" /></a>
                                </div>
                                <div id='ytbdiv'>
                                    <a href="https://www.youtube.com/@fl3ur_1nestimable" target="_blank"><img id='ytb' src="ytb.png" alt="youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <img id='wing2' className='wing lw postbb' src='wings.png' />
                        <img id='rose2' src='rose.png' className="browncontent rose" />
                    </div>
                    <div id="petale">
                        <button id="petalenoir" onClick={() => this.displaySelected("noir")}></button>
                        <button id="petalebrown" onClick={() => this.displaySelected("brown")}></button>
                        <button id="petaleblue" onClick={() => this.displaySelected("blue")}></button>
                        <button id="petalejaune" onClick={() => this.displaySelected("jaune")}></button>
                        <div id="centerfraise">
                            <img id="fraise" src="strawberryfull.png" alt="fraise" onClick={() => this.rotatePetale()} />
                        </div>
                    </div>
                    <div id='brown'>
                        <h1 id='pick' className="pre bn">Your</h1>
                        <div className="browncontent whitetext" style={{width:'80%'}}>
                            <h1 id='titlebrown'>Music</h1>
                            <p>I Can't live without music.</p><p>I'm a musician, currently playing/learning piano and drums, I want to play as many instruments as possible, and become a jazz musician.</p><p>I like jazz, electro, swing, latino, and more, improvising, just playing what I love, and of course, have fun! If you want to play with me or do something, contact me !</p>
                            <p>I'm also a music producer, in the learning phase :D</p>
                            <div id="spotifydiv">
                                <iframe id='spotify' src="https://open.spotify.com/embed/track/2Jk4bVmplmMxWdJIfLzuZh?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                <iframe id='sd' width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108319149&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                            </div>
                        </div>
                        <img id='rose' src='rose.png' className="yellowcontent rose" />
                        <img id='wing' className='wing rw postbb' src='wings.png' />
                    </div>
                    <div id='blue' hidden="false">
                        <h1 id='pick' className="pre bu">Poison</h1>
                        <p id='pickp'>Or spin Me :D</p>
                        <div className="bluecontent blacktext">
                            <h1 id='titleblue'>Sports</h1>
                            <p id='textblue'>I love sports.</p>
                            <p>I practised different sports during my childhood and in middle/high school.</p>
                            <p>Such as swimming, handball, volleyball. I love climbing and gymnastics. Currently, I'm mainly focused on <a style={{color:'black',fontWeight:'bold'}} href="https://en.wikipedia.org/wiki/Calisthenics#Common_exercises" target="_blank">Calisthenics</a> and Cardio.</p>
                            <p>I'm also a dancer. Shuffle, Batchata, Hip Hop, Rock, and maybe more ! If you wanna talk sports, I'm here :)</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default DesktopFleur;