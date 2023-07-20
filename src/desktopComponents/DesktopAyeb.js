import './DesktopAyeb.css'
import React from 'react';

class DesktopAyeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null,
        }
    }

    menuGoto = (title) => {
        let ayebretbtn = document.getElementById('ayebretbtn');
        ayebretbtn.style.display = 'block';
        ayebretbtn.style.animation = 'animOp 1s ease-in-out forwards';
        let ayebmenu = document.getElementById('ayebmenu');
        ayebmenu.style.animation = 'slideouttoright 1s ease-in-out forwards';
        setTimeout(() => {
            ayebmenu.style.animation = 'none';
            ayebmenu.style.display = 'none';
        }, 1000);
        switch (title) {
            case 'resume':
                let resumed = document.getElementById('resumed');
                resumed.style.animation = 'slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    resumed.style.animation = 'none';
                    resumed.style.left = '0';
                }, 1000);
                ayebretbtn.style.color = '#FF5757';
                this.setState({ current: 'resume' });
                break;
            case 'portfolio':
                let portd = document.getElementById('portd');
                portd.style.animation = 'slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    portd.style.animation = 'none';
                    portd.style.left = '0';
                }
                    , 1000);
                ayebretbtn.style.color = '#5271FF';
                this.setState({ current: 'portfolio' });
                break;
            case 'projects':
                let projd = document.getElementById('projd');
                projd.style.animation = 'slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    projd.style.animation = 'none';
                    projd.style.left = '0';
                }
                    , 1000);
                ayebretbtn.style.color = '#FF914D';
                this.setState({ current: 'projects' });
                break;
            default:
                break;
        }
    }

    goBackFrom = () => {
        let cur = this.state.current;
        console.log(cur);
        let ayebretbtn = document.getElementById('ayebretbtn');
        let ayebmenu = document.getElementById('ayebmenu');
        let btnres = document.getElementsByClassName('btnres');
        let btnport = document.getElementsByClassName('btnport');
        let btnproj = document.getElementsByClassName('btnproj');
        let btns = [btnres, btnport, btnproj];
        for (let i = 0; i < btns.length; i++) {
            btns[i][0].style.display = 'none';
        }
        switch (cur) {
            case 'resume':
                let resumed = document.getElementById('resumed');
                resumed.style.animation = 'slideouttoright 1s ease-in-out forwards';
                setTimeout(() => {
                    resumed.style.animation = 'none';
                    resumed.style.left = '-100%';
                    for (let i = 0; i < btns.length; i++) {
                        btns[i][0].style.display = 'block';
                    }
                }, 1000);
                ayebretbtn.style.display = 'none';
                ayebmenu.style.display = 'block';
                ayebmenu.style.animation = 'slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    ayebmenu.style.animation = 'none';
                }
                    , 1000);
                break;
            case 'portfolio':
                let portd = document.getElementById('portd');
                portd.style.animation = 'slideouttoright 1s ease-in-out forwards';
                setTimeout(() => {
                    portd.style.animation = 'none';
                    portd.style.left = '-100%';
                    for (let i = 0; i < btns.length; i++) {
                        btns[i][0].style.display = 'block';
                    }
                }
                    , 1000);
                ayebretbtn.style.display = 'none';
                ayebmenu.style.display = 'block';
                ayebmenu.style.animation = 'slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    ayebmenu.style.animation = 'none';
                }
                    , 1000);
                break;
            case 'projects':
                let projd = document.getElementById('projd');
                projd.style.animation = 'slideouttoright 1s ease-in-out forwards';
                setTimeout(() => {
                    projd.style.animation = 'none';
                    projd.style.left = '-100%';
                    for (let i = 0; i < btns.length; i++) {
                        btns[i][0].style.display = 'block';
                    }
                }
                    , 1000);
                ayebretbtn.style.display = 'none';
                ayebmenu.style.display = 'block';
                ayebmenu.style.animation = 'slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    ayebmenu.style.animation = 'none';
                }
                    , 1000);
                break;
            default:
                break;
        }
    }

    goHome = () => {
        let ayebmenu = document.getElementById('ayebmenu');
        ayebmenu.style.animation = 'slideouttoright 1s ease-in-out forwards';
        setTimeout(() => {
            window.location.href = '/';
        }, 1200);
    }

    render() {
        return (
            <>
                <div id='ayebd'>
                    <div id='ayebmenu'>
                        <button id='bhome' onClick={() => this.goHome()}>Home</button>
                        <button id='ayebmenubtn' className='btnres one' onClick={() => this.menuGoto('resume')}>Resume</button>
                        <button id='ayebmenubtn' className='btnport two' onClick={() => this.menuGoto('portfolio')}>Portfolio</button>
                        <button id='ayebmenubtn' className='btnproj three' onClick={() => this.menuGoto('projects')}>Projects</button>
                    </div>
                    <div id='resumed' className='hidstart'>
                        <div id='rescont'>
                            <hr id='hrres'></hr>
                            <div id='restop'>
                                <img id='me' src='me.jpg' alt='me'></img>
                                <div id='restopr'>
                                    <h1 id='restitre'>Antoine Yebouet</h1>
                                    <a href='Resume_Antoine_YEBOUET.pdf' download={true} id='linkres'>Download my CV for more details</a>
                                    <div id='resmenu'>
                                        <button id='resmenubtn' className='edu'>Education</button>
                                        <button id='resmenubtn' className='skl'>Computer skills</button>
                                        <button id='resmenubtn' className='lan'>Languages</button>
                                        <button id='resmenubtn' className='msc'>Miscellaneous</button>
                                    </div>
                                </div>
                            </div>
                            <div id='resbot'>
                                <div id='resintro'></div>
                                <div id='resedu'></div>
                                <div id='resskl'></div>
                                <div id='reslan'></div>
                                <div id='resmsc'></div>
                            </div>
                        </div>
                        <img id='histo' src='histored.png' alt='histored'></img>
                    </div>
                    <div id='portd' className='hidstart'>
                        <div id='portcont'>
                            <div id='porttop'>
                                <h1 id='portitre'>Portfolio - School projects</h1>
                            </div>
                            <hr id='hrport'></hr>
                            <div id='portbot'>
                            </div>
                        </div>
                        <img id='waveblue' src='waveblue.png' alt='waveblue'></img>
                    </div>
                    <div id='projd' className='hidstart'>
                        <div id='projcont'>
                            <div id='projtop'>
                                <h1 id='projtitre'>Personal projects</h1>
                            </div>
                            <hr id='hrproj'></hr>
                            <div id='projbot'>
                            </div>
                        </div>
                        <img id='waveorange' src='waveorange.png' alt='waveorange'></img>
                    </div>
                    <button id='ayebretbtn' onClick={() => this.goBackFrom()}>Back</button>
                </div>
            </>
        )
    }
}

export default DesktopAyeb;