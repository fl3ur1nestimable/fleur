import "./MobileFleur.css"
import React from "react";

class MobileFleur extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    displaySelectedM = (color) => {
        let text = document.getElementById("textpick");
        text.style.display = "none";
        let fleurpage = document.getElementById("fleurpageM");
        fleurpage.style.transitionDuration = "1s";
        switch (color) {
            case "noir":
                let noir = document.getElementById("menunoir");
                noir.style.border = "2px solid white";
                noir.style.transform = "translate(0,-50%)";
                fleurpage.style.backgroundColor = "black";
                let jaune = document.getElementById("menujaune");
                let blue = document.getElementById("menublue");
                let brown = document.getElementById("menubrown");
                jaune.style.transform = "translate(0,0)";
                blue.style.transform = "translate(0,0)";
                brown.style.transform = "translate(0,0)";
                jaune.style.border = "none";
                blue.style.border = "none";
                brown.style.border = "none";
                jaune.style.opacity = "50%";
                blue.style.opacity = "50%";
                brown.style.opacity = "50%";
                noir.style.opacity = "100%";
                break;

            case "jaune":
                let jaune2 = document.getElementById("menujaune");
                jaune2.style.border = "2px solid white";
                jaune2.style.transform = "translate(0,-50%)";
                fleurpage.style.backgroundColor = "#FFDE59";
                let noir2 = document.getElementById("menunoir");
                let blue2 = document.getElementById("menublue");
                let brown2 = document.getElementById("menubrown");
                noir2.style.border = "none";
                blue2.style.border = "none";
                brown2.style.border = "none";
                noir2.style.transform = "translate(0,0)";
                blue2.style.transform = "translate(0,0)";
                brown2.style.transform = "translate(0,0)";
                noir2.style.opacity = "50%";
                blue2.style.opacity = "50%";
                brown2.style.opacity = "50%";
                jaune2.style.opacity = "100%";
                break;

            case "blue":
                let blue3 = document.getElementById("menublue");
                blue3.style.border = "2px solid white";
                blue3.style.transform = "translate(0,-50%)";
                fleurpage.style.backgroundColor = "#5CE1E6";
                let jaune3 = document.getElementById("menujaune");
                let noir3 = document.getElementById("menunoir");
                let brown3 = document.getElementById("menubrown");
                jaune3.style.border = "none";
                noir3.style.border = "none";
                brown3.style.border = "none";
                jaune3.style.transform = "translate(0,0)";
                noir3.style.transform = "translate(0,0)";
                brown3.style.transform = "translate(0,0)";
                jaune3.style.opacity = "50%";
                noir3.style.opacity = "50%";
                brown3.style.opacity = "50%";
                blue3.style.opacity = "100%";
                break;

            case "brown":
                let brown4 = document.getElementById("menubrown");
                brown4.style.border = "2px solid white";
                brown4.style.transform = "translate(0,-50%)";
                fleurpage.style.backgroundColor = "#863B0B";
                let jaune4 = document.getElementById("menujaune");
                let blue4 = document.getElementById("menublue");
                let noir4 = document.getElementById("menunoir");
                jaune4.style.border = "none";
                blue4.style.border = "none";
                noir4.style.border = "none";
                jaune4.style.transform = "translate(0,0)";
                blue4.style.transform = "translate(0,0)";
                noir4.style.transform = "translate(0,0)";
                jaune4.style.opacity = "50%";
                blue4.style.opacity = "50%";
                noir4.style.opacity = "50%";
                brown4.style.opacity = "100%";
                break;


        }
    }

    render() {
        return (
            <>
                <div id='fleurpageM'>
                    <img id="fraiseM" src="strawberryfull.png" alt="fraise" />
                    <div id='textpickM'>
                        <p id='textpick'>Pick your poison</p>
                    </div>
                    <div id='menu'>
                        <button id='menunoir' onClick={() => this.displaySelectedM("noir")}></button>
                        <button id='menubrown' onClick={() => this.displaySelectedM("brown")}></button>
                        <button id='menublue' onClick={() => this.displaySelectedM("blue")}></button>
                        <button id='menujaune' onClick={() => this.displaySelectedM("jaune")}></button>
                    </div>
                </div>
            </>
        )
    }

}

export default MobileFleur;