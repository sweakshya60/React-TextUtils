import React, { useState } from 'react'

const TextForm = ({heading}) => {
    const handleUpButton =() =>{
        // console.log("uppercase" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange =(event) =>{
        // console.log("onchange")
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here ")
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
        <div className='container'>
            <div class="mb-3">
            <h2>{heading}</h2>
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpButton}>Convert to UpperCase</button>
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>{wordCount} words and {text.length} character</p>
            <p>It took {0.008*wordCount} minutes to read {wordCount} of words. </p>
        </div>
    </>

  )
}

export default TextForm
