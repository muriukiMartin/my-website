import React from "react";
import About from "./About";
// import '../App.css';
function Homepage() {
    return (
        <div>
            <header>
                <div id="header">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s16000/blank-profile-picture-hd-images-photo.JPG" alt="profile-image"></img>
                    <h1>Martin Muriuki</h1>
                </div>
            </header>
            <body>
                <About />
            </body>
        </div>
    )
}

export default Homepage;