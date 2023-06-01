import React from "react";
import Button from "./botton";

function LoginComponent(props){
    return(
        <Button text="login" onClickHandler ={props.onClickHandler} ></Button>
    )
}

export default LoginComponent