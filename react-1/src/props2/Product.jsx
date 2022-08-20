import React, { component} from "react";
import { Component } from "react";
import Cart from "./Cart";
 class Product extends Component{
    product_Name = " Iphone 11"
    product_Price = 65000;
    colors = [ "grey", "white", "green", "red"]
    render(){
        return(
            <div>
                <h2>Product Component</h2>
                <hr />
                <Cart name = {this.product_Name} price = {this.product_Price} color = {this.colors}/>
            </div>
        )
    }
 }

 export default Product;