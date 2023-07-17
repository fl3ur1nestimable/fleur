import './MobileWelcome.css'
import React from 'react';

class MobileWelcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
        }
    }

    animateTopClicked = () => {
        let top = document.getElementById('top');
        top.style.transition = 'height 1s ease-in-out';
        top.style.height = '100%';
        let imgtop = document.getElementById('imgtop');
        imgtop.style.filter = 'opacity(100)';
        let bot = document.getElementById('bot');
        bot.style.transition = 'height 1s ease-in-out';
        bot.style.height = '0%';
        let btntop = document.getElementById('btn_top');
        btntop.style.visibility = 'hidden';
        let maintop = document.getElementById('maintop');
        maintop.style.color = 'rgb(133, 73, 24)';
        let subtop = document.getElementById('subtop');
        subtop.style.visibility = 'visible';
        subtop.style.color = 'rgb(0, 162, 255)';
        setTimeout(() => {
            var i = 0;
            function move() {
                if (i === 0) {
                    i = 1;
                    var elem = document.getElementById("bartop");
                    var width = 0;
                    var id = setInterval(frame, 15);
                    function frame() {
                        if (width >= 100) {
                            clearInterval(id);
                            i = 0;
                        } else {
                            width++;
                            elem.style.width = width + "%";
                            elem.innerHTML = width + "%";
                        }
                    }
                }
            }
            let progresstop = document.getElementById('progresstop');
            progresstop.style.visibility = 'visible';
            move();
        }, 1000);
        setTimeout(() => {
            top.style.transition = 'transform 1s ease-in-out';
            top.style.transform = 'translateX(-100%)';
        }, 3000);
        setTimeout(() => {
            window.location.href = '/fleur';
        }, 4000);
    }

    animateBotClicked = () => {
        let bot = document.getElementById('bot');
        bot.style.transition = 'height 1s ease-in-out';
        bot.style.height = '100%';
        let imgbot = document.getElementById('imgbot');
        imgbot.style.filter = 'opacity(100)';
        let top = document.getElementById('top');
        top.style.transition = 'height 1s ease-in-out';
        top.style.height = '0%';
        let btnbot = document.getElementById('btn_bot');
        btnbot.style.visibility = 'hidden';
        let mainbot = document.getElementById('mainbot');
        mainbot.style.color = 'rgb(255, 0, 85)';
        let subbot = document.getElementById('subbot');
        subbot.style.visibility = 'visible';
        setTimeout(() => {
            var i = 0;
            function move() {
                if (i === 0) {
                    i = 1;
                    var elem = document.getElementById("barbot");
                    var width = 0;
                    var id = setInterval(frame, 15);
                    function frame() {
                        if (width >= 100) {
                            clearInterval(id);
                            i = 0;
                        } else {
                            width++;
                            elem.style.width = width + "%";
                            elem.innerHTML = width + "%";
                        }
                    }
                }
            }
            let progressbot = document.getElementById('progressbot');
            progressbot.style.visibility = 'visible';
            move();
        }, 1000);
        setTimeout(() => {
            bot.style.transition = 'transform 1s ease-in-out';
            bot.style.transform = 'translateX(100%)';
        }, 3000);
        setTimeout(() => {
            window.location.href = '/ayeb';
        }, 4000);
    }

    render() {
        return (
            <>
                <div className="splitM top" id='top'>
                    <div className="fleurM" id='fleurM'>
                        <h1 id='maintop'>Fl3ur_1nestimable</h1>
                        <h2 id='subtop'>Music | Sports | Socials</h2>
                        <button id="btn_top" onClick={this.animateTopClicked}>Let's go</button>
                        <div id="progresstop">
                            <div id="bartop">0%</div>
                        </div>
                    </div>
                    <img src="arrivalyellowfull.png" alt="arrivalyellow" id='imgtop' />
                </div>
                <div className="splitM bot" id='bot'>
                    <div className="ayebM" id='ayebM'>
                        <h1 id='mainbot'>Antoine Yebouet</h1>
                        <h2 id='subbot'>Portfolio | Resume | Projects</h2>
                        <button id="btn_bot" onClick={this.animateBotClicked}>Enter</button>
                        <div id="progressbot">
                            <div id="barbot">0%</div>
                        </div>
                    </div>
                    <img src="arrivalrosefull.png" alt="arrivalyellow" id='imgbot' />
                </div>
            </>
        )
    }

}

export default MobileWelcome;