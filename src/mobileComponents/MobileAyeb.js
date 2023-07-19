import './MobileAyeb.css'
import React from 'react';

class MobileAyeb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <>
                {
                    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.screen.availHeight < window.screen.availWidth ) ? (
                        <div id="messageLandscape">
                            <p>/!\ Please turn your phone to portrait mode. /!\</p>
                        </div>)
                        :
                        (
                            <div></div>
                        )
                }
            </>
        )
    }
}

export default MobileAyeb;