import React from 'react'



function Navbar(props) {
    return (
            <div>
                    <nav className={`navbar navbar-light bg-${props.mode==="light"?"dark":"light"}`}>
                        <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                        <img src="../../edittext.png" alt="" width="24" height="24" className={`d-inline-block align-text-top`}/>
                        EdiText
                        </a>
                        <div className={`form-check form-switch text-${props.mode==='light'?'light':'dark'}`}>
                        <input className="form-check-input" onClick={props.changeBackGround} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} Mode</label>
                        </div>

            </div>
                    </nav>
        </div>
    )
}

export default Navbar
