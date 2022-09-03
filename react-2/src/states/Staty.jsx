import React from "react";
class Staty extends React.Component{
    state = { 
        product_Name : "Zara Shirt",
        price : 2999,
        image : "https://static.zara.net/photos///2022/I/0/2/p/7545/300/401/2/w/1500/7545300401_6_1_1.jpg?ts=1660034749849",
        Quantity : 1
    }
    incrHandler = () => {
        this.setState({Quantity : this.state.Quantity + 1})
    }
    decrHandler = () => {
        this.setState({Quantity : this.state.Quantity - 1})
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className = "table table-hover">
                            <thead className = "bg-success">
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src = {this.state.image} alt = "" height = "200px" width = "100px"/></td>
                                    <td>{this.state.price}</td>
                                    <td>
                                        <i class = "fa fa-minus-circle" onClick = {this.decrHandler}></i>
                                        {this.state.Quantity}
                                        <i class = 'fa fa-plus-circle' onClick = {this.incrHandler}></i>
                                    </td>
                                    <td>{this.state.price * this.state.Quantity}</td>
                                </tr>

                            </tbody>
                        </table>
                    
            
        
                    </div>
                </div>
            </div>
        )
    }

}
export default Staty;