import React from "react";
import Person from "./Person";
class Listy2 extends React.Component{
    persons = [
        { id : 101, name : "Rajamouli", email : "jakkanna@gmail.com", loc : "Hyderabad"},
        { id : 102, name : "Prabhas", email : "actorprabhas@gmail.com", loc : "Hyderabad"},
        { id : 103, name : "Rana", email : "nenurana@gmail.com", loc : "Hyderabad"},
    ];
    personDataList = this.persons.map((person) => <Person person = {person}></Person>)
    render(){
        return <div>
            {this.personDataList}
        </div>
    }
    
}
export default Listy2;