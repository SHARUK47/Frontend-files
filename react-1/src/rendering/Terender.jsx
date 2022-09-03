import React from "react";
class Terender extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isloggedin : false,
        };
    }
    render(){
        return this.state.isloggedin ? <div>Welcome Home</div> : <div>Welcome to namma Bengaluru</div>
    }
}
export default Terender;