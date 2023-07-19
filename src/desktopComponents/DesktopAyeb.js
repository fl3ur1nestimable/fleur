import './DesktopAyeb.css'
import React from 'react';

class DesktopAyeb extends React.Component{
    constructor(props){
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
        switch(title){
            case 'resume':
                let resumed = document.getElementById('resumed');
                resumed.style.animation ='slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    resumed.style.animation = 'none';
                    resumed.style.left = '0';
                }, 1000);
                ayebretbtn.style.color = '#FF5757';
                this.state.current = 'resume';
                break;
            case 'portfolio':
                let portd = document.getElementById('portd');
                portd.style.animation ='slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    portd.style.animation = 'none';
                    portd.style.left = '0';
                }
                , 1000);
                ayebretbtn.style.color = '#5271FF';
                this.state.current = 'portfolio';
                break;
            case 'projects':
                let projd = document.getElementById('projd');
                projd.style.animation ='slideouttoleft 1s ease-in-out forwards';
                setTimeout(() => {
                    projd.style.animation = 'none';
                    projd.style.left = '0';
                }
                , 1000);
                ayebretbtn.style.color = '#FF914D';
                this.state.current = 'projects';
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
        for(let i = 0; i < btns.length; i++){
            btns[i][0].style.display = 'none';
        }
        switch(cur){
            case 'resume':
                let resumed = document.getElementById('resumed');
                resumed.style.animation ='slideouttoright 1s ease-in-out forwards';
                setTimeout(() => {
                    resumed.style.animation = 'none';
                    resumed.style.left = '-100%';
                    for(let i = 0; i < btns.length; i++){
                        btns[i][0].style.display = 'block';
                    }
                } , 1000);
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
                portd.style.animation ='slideouttoright 1s ease-in-out forwards';
                setTimeout(() => {
                    portd.style.animation = 'none';
                    portd.style.left = '-100%';
                    for(let i = 0; i < btns.length; i++){
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
                projd.style.animation ='slideouttoright 1s ease-in-out forwards';
                setTimeout(() => {
                    projd.style.animation = 'none';
                    projd.style.left = '-100%';
                    for(let i = 0; i < btns.length; i++){
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

    render(){
        return(
            <>
                <div id='ayebd'>
                    <div id='ayebmenu'>
                        <button id='bhome' onClick={() => this.goHome()}>Home</button>
                        <button id='ayebmenubtn' className='btnres one' onClick={() => this.menuGoto('resume')}>Resume</button>
                        <button id='ayebmenubtn' className='btnport two' onClick={() => this.menuGoto('portfolio')}>Portfolio</button>
                        <button id='ayebmenubtn' className='btnproj three' onClick={() => this.menuGoto('projects')}>Projects</button>
                    </div>
                    <div id='resumed' className='hidstart'>
                        <img id='histo' src='histored.png' alt='histored'></img>
                    </div>
                    <div id='portd' className='hidstart'>
                        <img id='waveblue' src='waveblue.png' alt='waveblue'></img>
                    </div>
                    <div id='projd' className='hidstart'>
                        <img id='waveorange' src='waveorange.png' alt='waveorange'></img>
                    </div>
                    <button id='ayebretbtn' onClick={() => this.goBackFrom()}>Back</button>
                </div>
            </>
        )
    }
}

export default DesktopAyeb;