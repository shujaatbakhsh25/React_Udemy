import React from 'react'
import ReactDOM from 'react-dom'

const buttonText = {text : "lol"}
const App = () => {
    return (
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={{backgroundColor : "blue", color : "white"}}>{buttonText.text}</button>
    </div>
    );
};

ReactDOM.render(<App /> , document.getElementById('root'))