import React from 'react';
export default function WindowTracker() {
    

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    // when we press on the toggle button in app.js windowtracker component will be removed from the DOM i.e unmounted
    // So when we press again it will again be mounted and it re-run the window.innerWidth and it will give the current window width
    // so thats why we using the use useEffect hook to observe the window width and update the state, so thats why we created a state \
    // variable above....

    // But the little bug here is that this windowTracker component is handled by the parent component i.e App.js
    // on condition when the state is true, so when we press the toggle button the state is false and the component is unmounted
    // and at this state if we try to resize the window it will give an error Can't perform a React state update on an unmounted component 
    // This effect is called Memory Leaking, to avoid this we will use useEffect clean up function

    React.useEffect(() => {
        function setit() {
            console.log("setting up")
            setWindowWidth(window.innerWidth) 
        }

        window.addEventListener("resize",setit)
        return () => {
            console.log("Cleaning up...")
            window.removeEventListener("resize",setit)
        }
    
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}