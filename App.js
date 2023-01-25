import React, {useState, useEffect, useRef} from "react"
 import user from "./hooks/useWordGame"
/**
 * Challenge:
 * 
 * Move the "business logic" into a custom hook, which will provide
 * any parts of state and any functions to this component to use.
 * 
 * You can easily tell which parts the component needs by looking at 
 * the variables being used inside the `return`ed markup below.
 */

function App() {
const { textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount} = user()  
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
