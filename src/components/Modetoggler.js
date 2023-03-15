function ModeToggler(){
    let darkModeOn = true; 
    let darkMode = <h1>Dark Mode is On</h1>
    let lightMode = <h1>Light Mode is On</h1>

    const toggleButton = ()=> {
        darkModeOn = !darkModeOn;  
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