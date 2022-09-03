import React from "react";
class Evec extends React.Component{
    state = {
        emp_Sal : 50000
    };
    btnHandler(value){
        console.log("Readind button data", value);
        this.setState({emp_Sal : 50000 + value});

    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">

                </nav>
                <h1>Employee Salary : {this.state.emp_Sal}</h1>
                <button className="btn btn-success mr-5" onClick={this.btnHandler.bind(this, 50000)}>Hike 50k

                </button>
                <button className="btn btn-primary mr-5" onClick={this.btnHandler.bind(this, 100000)}>Hike 100k

                </button>
                <button className="btn btn-danger mr-5" onClick={this.btnHandler.bind(this, 0)}>Hike ok

                </button>

                
            </div>
        );
    }
}
export default Evec;