import React from "react";
class Eveb extends React.Component{
    state = {
        counter : 0
    };
    incrHandler = () => {
        this.setState({counter : this.state.counter + 1});
    }
    decrHandler = () => {
        this.setState({counter : this.state.counter - 1});
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">

                </nav>
                <h1>Counter Value : {this.state.counter}</h1>
                <button className="btn btn-success mr-5" onClick={this.incrHandler}>Increment

                </button>
                <button className="btn btn-primary" onClick={this.decrHandler}>Decrement

                </button>
            </div>
        );
    }
}
export default Eveb;