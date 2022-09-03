import React from "react";
class Loginform extends React.Component{
    state = {
        email : "",
        password : "",
    };
    emailHandler = (event) => {
        this.setState({email : event.target.value})
    }
    passwordHandler = (event) => {
        this.setState({password : event.target.value})
    };
    render(){
        return (
            <div>
                <form>
                    <label>Email</label>
                    <input type = "text" placeholder = "Email Id" onChange={this.emailHandler}/>
                    <br/><br/>
                    <label>Password</label>
                    <input type = "text" placeholder="Please Enter Password" onChange={this.passwordHandler}/>
                    <br/><br/>
                    <input type = "submit" value = "login..."/>
                    <hr/>
                </form>
                <pre>{JSON.stringify(this.state)}</pre>


            </div>
        )
    }

}
export default Loginform ;

