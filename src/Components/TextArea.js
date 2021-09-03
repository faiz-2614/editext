import React, {useState} from 'react'


function TextArea(props) {
    const [text, setText] = useState("")

    const UpperCaseHandler = ()=>{ 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase!" ,"success")
    }

    const LowerCaseHandler = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase!" ,"success")
    }

    const ClearHandler = ()=>{ 
        setText("")
        props.showAlert("Cleared Text!" ,"success")
    }

    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!" ,"success")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }


    return (
        <div className="container">
            <div className="mb-3">
                <label  htmlFor="exampleFormControlTextarea1" className="form-label center mt-3"><h1>Enter Text</h1></label>
                <textarea className="form-control m-6"  onChange={handleOnChange} id="exampleFormControlTextarea1" value={text} rows="10"></textarea>
                <button type="button" onClick={UpperCaseHandler} className="btn btn-dark m-2 btn-lg mt-3">Convert To UpperCase</button>
                <button type="button" onClick={LowerCaseHandler} className="btn btn-dark m-2 btn-lg mt-3">Convert To LowerCase</button>
                <button type="button" onClick={ClearHandler} className="btn btn-dark m-2 btn-lg mt-3">Clear Text</button>
                <button type="button" onClick={RemoveExtraSpaces} className="btn btn-dark m-2 btn-lg mt-3">Remove Extra Space</button>
            </div>
            <div className="container">
                <strong className="mx-3">No of Words:{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </strong>    
                <strong className="mx-3">No of Characters:{text.length}</strong>
            </div>

        </div>
    )
}

export default TextArea
