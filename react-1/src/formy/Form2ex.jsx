import React from "react";
class Form2ex extends React.Component{
    state = {
        email : "",
        password : "",
    };
    updateHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    submitHandler = (event) => {
        
            event.preventDefalt();
            console.log(this.state);
        }
    
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <br/>
                    <label>Email</label>
                    <input type = "text" placeholder = "Email Id" onChange={this.updateHandler} name = "email"/>
                    <br/><br/>
                    <label>Password</label>
                    <input type = "text" placeholder="Please Enter Password" onChange={this.updateHandler} name = "password"/>
                    <br/><br/>
                    <input type = "submit" value = "login..."/>
                    <hr/>
                </form>
                <pre>{JSON.stringify(this.state)}</pre>


            </div>
        )
    }

}
export default Form2ex ;

