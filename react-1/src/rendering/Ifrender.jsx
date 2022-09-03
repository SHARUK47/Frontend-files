import React from "react";
class Ifrender extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isloggedin : true,
        };
    }
    render(){
        let message;
        if(this.state.isloggedin){
            message  = <div>Welcome Home </div>;

        }else{
            message = <div>Welcome to namma Bengaluru</div>
        }
        return<div>{message}</div>
    }
}
export default Ifrender;