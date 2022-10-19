import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from "./message.action"
let Message = () => {
    let dispatch = useDispatch();
    let msg = useSelector((state) => { return state.message});
    let gmHandler = () => {
        dispatch(gmAction());
    };
    let gnHandler = () => {
        dispatch(gnAction());
    };
    return (
        <div>
            <h2>Message Component</h2>
            <pre>{JSON.stringify(msg)}</pre>
            <h3>Messsage : {msg.message}</h3>
            <button className="btn btn-success mr-2" onClick = {gmHandler} >GM</button>
            <button className="btn btn-success mr-2" onClick = {gnHandler} >GN</button>

        </div>
    )
}
export default Message;