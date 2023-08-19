import React,{useState} from 'react'
// Hooks


export default function TextForm(props) {
    const [text,setText]=useState('');
//   text="new text" wrong way to change the state 
//    setText("") correct way
const handleUpCase=()=>{
    // console.log("upperCase was clicked")
    // setText("You have clicked handleUpCase"+text)
    let newText=text.toUpperCase();
    setText(newText);

}
const handelOnChange=(event)=>{
    // console.log("Onchange")
    setText(event.target.value)
}
const handleLowerCase=()=>{
  // console.log("upperCase was clicked")
  // setText("You have clicked handleUpCase"+text)
  let newText=text.toLowerCase();
  setText(newText);
}
const handleClearText=()=>{
  let newText=""
  setText(newText)
}


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white', 
  color:props.mode==='dark'?'white':'black'}} onChange={handelOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 " onClick={handleUpCase}>CovertToUpperCase</button> 
<button className="btn btn-primary mx-1" onClick={handleLowerCase}>CovertToLowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearText}>ClearText</button>


</div>
<div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}} >
  <h2>Your Text summary </h2>
  <p>{text.split(" ").length} words and {text.length} character </p>
<p>{0.008*text.split(" ").length} it can read in this minutes </p>
<h3>preview</h3>
<p>{text.length>0?text:"Enter Something in the above TextBox to preview it"}</p>
</div>

</>
  )
 }