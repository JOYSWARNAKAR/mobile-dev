// light-Dark Mode Toggle App

import { useState, useEffect } from 'react'

const Theme = () => {

    const [darkMode, setDarkMode] = useState(false)

     function onToggleTheme () {
        setDarkMode(!darkMode)
        console.log(darkMode);
        
     }
    //  1. without dep array - runs on every render

    // useEffect(() => {
    //     // heavy billions cal
    //     console.log("runs on every render");
    // })

    // 2. with empty dep array - runs only on first render

    // useEffect(() => {
    //     console.log("runs only on first render"); 
        
    // }, [])

    // 3. with dep array - runs on first render and whenever the value in dep array changes

    // useEffect(() => {
    //     console.log("runs on first render and whenever darkMode changes");
    // }, [darkMode])

  return (
    <div
    style={{
        height:"100vh" ,
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#121212",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s"
    }} >

        <h1>
            Mode {darkMode ? "Change to light" : "Change to dark"}
        </h1>
        
        <button onClick={onToggleTheme}>
            Toggle Theme
        </button>
    </div>
  )
}

export default Theme