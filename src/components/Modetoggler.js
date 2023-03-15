import { useState } from "react";

function ModeToggler(){
    let darkMode = <h1>Dark Mode is On</h1>
    let lightMode = <h1>Light Mode is On</h1>
    let [darkModeOn, setMode] = useState(true); 
    const toggleButton = ()=> {
        setMode(!darkModeOn);  // you can't change the value directly, you have to use 'useState'
    }
    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={toggleButton}>
                Click me
            </button>
        </div>
    ); 
}

export default ModeToggler; 