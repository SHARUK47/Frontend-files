import React from "react";
class Listy extends React.Component{
    names = ["prashanth neel", "yash", "shri nidhi"];
    render(){
        return(
            <div>
                {this.names.map(
                    (name) => (
                        <h1>
                            {name}
                        </h1>
                    )
                )}
            </div>
        )
    }
};
export default Listy;