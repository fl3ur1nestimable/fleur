import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Fleur from "./Fleur";
import Ayeb from "./Ayeb";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Welcome} />
                <Route path="/fleur" Component={Fleur} />
                <Route path="/ayeb" Component={Ayeb} />
            </Routes>
        </Router>
    );
}

export default App;