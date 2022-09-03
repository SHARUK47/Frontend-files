import React from "react";
class ChildComp extends React.Component{
    render(){
        const{employee1} = this.props;
        return(
            <div>
                <table>
                    <tr>
                        <td>Name is : {employee1.name}</td>
                    </tr>
                    <tr>
                        <td>Age is : {employee1.age}</td>
                    </tr>
                    <tr>
                        <td>Email is : {employee1.email}</td>
                    </tr>
                    <tr>
                        <td>Salary is : {employee1.salary}</td>
                    </tr>
                    <tr>
                        <td>Message is : { this.props.msg1.message}</td>
                    </tr>
                    <tr>
                        <td>User is : {this.props.msg1.user}</td>
                    </tr>
                    <tr>
                        <td>Mail is : { this.props.mail}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default ChildComp;