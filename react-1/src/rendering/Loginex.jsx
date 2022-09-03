import React from "react";
class Loginex extends React.Component{
    state = {
        islogin : true,
        message : "",
    };
    loginHandler = () => {
        this.setState({islogin : true, message : "Welcome to pro stack"});
    };
    logoutHandler = () => {
        this.setState({islogin : false,message : "All the best"});
    }
    render (){
        return(
            <div className="col-md-8">
                <div className="card-header">{this.state.message}

                </div>
                <div className="card-body">
                    {!this.state.islogin ?(
                        <>
                        <button className="btn btn-success mr-5" onClick={this.loginHandler}>Login

                        </button>
                        </>
                    ): (
                        <>
                        <button className="btn btn-danger" onClick={this.logoutHandler}>Logout
                        </button>
                        </>
                    )}
                </div>

            </div>
        )
    }

}
export default Loginex;