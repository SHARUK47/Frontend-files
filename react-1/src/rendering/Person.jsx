import React from "react";
class Person extends React.Component{
    render(){
        const {person} = this.props;
        return (
            <div>
                <h1>
                    I am {person.name} and My Location is {person.loc}
                </h1>
            </div>
        )
    }
}
export default Person;
