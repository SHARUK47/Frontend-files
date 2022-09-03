import React from "react";
import ChildComp from "./ChildComp"
class ParentComp extends React.Component{
    mail = "mail Delivered"
    message = {
        msg : "Good Morning", user : "Zippy"
    };
    constructor(){
        super();
        this.state = {
            employee : { empcode : 130, name : "Tempo Emp", age : 25, email : "Tempo@hmail.com", location : "Blr"}
        }
    }
    render(){
        return(
            <div>
                <ChildComp employee1 = {this.state.employee} msg1 = {this.message} mail1 = {this.mail}/>
            </div>
        )
    }
}
export default ParentComp;