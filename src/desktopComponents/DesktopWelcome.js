import './DesktopWelcome.css'
import React from 'react';

class DesktopWelcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    animateRightClicked = () => {
        let right = document.getElementById('right');
        right.style.transition = 'width 1s ease-in-out';
        right.style.width = '100%';
        let imgright = document.getElementById('imgright');
        imgright.style.filter = 'grayscale(0)';
        let left = document.getElementById('left');
        left.style.transition = 'width 1s ease-in-out';
        left.style.width = '0%';
        let btnright = document.getElementById('btn_right');
        btnright.style.visibility = 'hidden';
        let mainright = document.getElementById('mainright');
        mainright.style.color = 'rgb(255, 0, 85)';
        let subright = document.getElementById('subright');
        subright.style.visibility = 'visible';
        setTimeout(() => {
            var i = 0;
            function move() {
                if (i === 0) {
                    i = 1;
                    var elem = document.getElementById("barright");
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
            let progressright = document.getElementById('progressright');
            progressright.style.visibility = 'visible';
            move();
        }, 1000);
        setTimeout(() => {
            let ayeb = document.getElementById('ayeb');
            ayeb.style.transition = 'opacity 1s ease-in-out';
            ayeb.style.opacity = '0%';
        }, 2500);
        setTimeout(() => {
            right.style.transition = 'height 1s ease-in-out';
            right.style.height = '0%';
        }, 3000);
        setTimeout(() => {
            window.location.href = '/ayeb';
        }, 4000);
    }

    animateLeftClicked = () => {
        console.log('left clicked');
        let left = document.getElementById('left');
        left.style.transition = 'width 1s ease-in-out';
        left.style.width = '100%';
        left.style.zIndex = '2';
        let right = document.getElementById('right');
        right.style.transition = 'width 1s ease-in-out';
        right.style.width = '0%';
        let imgleft = document.getElementById('imgleft');
        imgleft.style.filter = 'grayscale(0)';
        let btnleft = document.getElementById('btn_left');
        btnleft.style.visibility = 'hidden';
        let mainleft = document.getElementById('mainleft');
        mainleft.style.color = 'rgb(133, 73, 24)';
        let subleft = document.getElementById('subleft');
        subleft.style.visibility = 'visible';
        subleft.style.color = 'rgb(0, 162, 255)';
        setTimeout(() => {
            var i = 0;
            function move() {
                if (i === 0) {
                    i = 1;
                    var elem = document.getElementById("barleft");
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
            let progressleft = document.getElementById('progressleft');
            progressleft.style.visibility = 'visible';
            move();
        }, 1000);
        setTimeout(() => {
            let fleur = document.getElementById('fleur');
            fleur.style.transition = 'opacity 1s ease-in-out';
            fleur.style.opacity = '0%';
        }, 2500);
        setTimeout(() => {
            left.style.transition = 'height 1s ease-in-out';
            left.style.height = '0%';
        }
            , 3000);;
        setTimeout(() => {
            window.location.href = '/fleur';
        }, 4000);
    }

    render() {
        return (
            <>
                <div className="split left" id='left'>
                    <div className="fleur" id='fleur'>
                        <h1 id='mainleft'>Fl3ur_1nestimable</h1>
                        <h2 id='subleft'>Music | Sports | Socials</h2>
                        <button id="btn_left" onClick={this.animateLeftClicked}>Let's go</button>
                        <div id="progressleft">
                            <div id="barleft">0%</div>
                        </div>
                    </div>
                    <img src="arrivalyellowfull.png" alt="arrivalyellow" id='imgleft' />
                </div>
                <div className="split right" id='right'>
                    <div className="ayeb" id='ayeb'>
                        <h1 id='mainright'>Antoine Yebouet</h1>
                        <h2 id='subright'>Portfolio | Resume | Projects</h2>
                        <button id="btn_right" onClick={this.animateRightClicked}>Enter</button>
                        <div id="progressright">
                            <div id="barright">0%</div>
                        </div>
                    </div>
                    <img src="arrivalrosefull.png" alt="arrivalrose" id='imgright' />
                </div>
            </>
        )
    }

}

export default DesktopWelcome;