import React from 'react'
import Logo from '../../Logo/Logo'
import classes from "./ToolBar.css";
const toolbar = (props) => (
    <header className={classes.ToolBar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>

)
    

export default toolbar