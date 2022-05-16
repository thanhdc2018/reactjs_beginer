import React, { Component } from "react";
import ProductComponent from "./components/ProductComponent";

class Props extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: 'Iphone 6 plus',
                price: 15000000,
                image: 'https://www.techone.vn/wp-content/uploads/2021/09/xanh-1-500x500.jpg',
                status: true
            },
            {
                id: 1,
                name: 'Samsung Galaxy Z Flip3 5G',
                price: 16000000,
                image: 'https://images.samsung.com/is/image/samsung/assets/vn/smartphones/galaxy-z-flip3-5g/buy/210119/ZFlip3_ColorSelection_Lavender_MO.jpg?imwidth=480',
                status: true
            },
            {
                id: 1,
                name: 'OPPO Reno7 Z 5G',
                price: 10000000,
                image: 'https://cdn.tgdd.vn/Products/Images/42/271717/Kit/oppo-reno7-z-note-3.jpg',
                status: true
            }
        ];
        let elements = products.map((product, index) => {
            if({product.status}){
                return (
                    <ProductComponent
                        price={product.price}
                        image={product.image}
                    >
                        {product.name}
                    </ProductComponent>
                )
            }
        });
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" >Props</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {elements}

                        </div>
                    </div>
                </div>
            </div>

        )
    };

}

export default Props;