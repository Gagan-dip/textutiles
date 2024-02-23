import React, {useState}from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked");
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To Uppercase!","success")

    // setText("You Have Clicked on handleUpClick")
}
const handleLoClick = ()=>{
    console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase(); // coonver to lower case
    setText(newText)
    props.showAlert("Converted To Lowercase!","success")

}
const handleClearClick = ()=>{
    console.log("Lowercase was Clicked" + text);
    let newText = (''); // Remove all text
    setText(newText)
    props.showAlert("Clear All text!","success")

}

const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)

}
// const countWords = () => {
//   let len;
//   len = text.split(" ");
//   if (len[len.length - 1] === "") {
//     return len.length - 1;
//   }
//   return len.length;
// }

 const handleCopy =()=>{
  // console.log("I am Copy");
  var text= document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard!","success")


 }

 const handleExtraSpaces =()=>{
  let newText =text.split(/[ ]+/);   //Regex function used if one or more spaces in the writinf line 
  setText(newText.join(" "));        // Then split it with only one space and remove extra spaces
  props.showAlert("Extra Spaces has been Removed!","success")

 }



 const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speaking Your Text !","success")
}


    // const [text, setText] = useState('Enter Text here...');
    const [text, setText] = useState('');

    // text = "New Text"; // Wrong way to change The state
    // setText("New Text"); // Correct way to change The state

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#021a37'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#021a37'}}  rows="8"></textarea>
            </div>  
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remover Extra Spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>

            
      </div>
      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#021a37'}}>
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length}Words and {text.length} Charcters.</p>
            <p>  {0.008 * text.split(" ").length}Minutes of Read .</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in text-Box above To Preview Here"}</p>

      </div>
    </>
  )
}
