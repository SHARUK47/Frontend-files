import React, {Component} from "react";
class Cart extends Component{
    render(props){
        return(
            <div>
                <h4>Cart Component</h4>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Product Name : {this.props.name}</h4>
                <h4>Product Color : {this.props.color[0]}</h4>
            </div>
        )
    }
}
export default Cart;