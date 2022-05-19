import React, { Component } from "react";
import ProductComponent from "./components/ProductComponent";

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Iphone 6 plus",
                    price: 15000000,
                    image: "https://www.techone.vn/wp-content/uploads/2021/09/xanh-1-500x500.jpg",
                    status: true,
                },
                {
                    id: 2,
                    name: "Samsung Galaxy Z Flip3 5G",
                    price: 16000000,
                    image: "https://images.samsung.com/is/image/samsung/assets/vn/smartphones/galaxy-z-flip3-5g/buy/210119/ZFlip3_ColorSelection_Lavender_MO.jpg?imwidth=480",
                    status: true,
                },
                {
                    id: 3,
                    name: "OPPO Reno7 Z 5G",
                    price: 10000000,
                    image: "https://cdn.tgdd.vn/Products/Images/42/271717/Kit/oppo-reno7-z-note-3.jpg",
                    status: true,
                },
            ],
        };
    }

    onBuyClicked = () => {
        console.log("hello");
    };

    onClick() {
        console.log("Đây là app component");
    }

    addToCart(text) {
        console.log(text);
        alert(text);
    }
    onAddProduct = () => {
        console.log(this.refs);
    };

    render() {
        const elements = this.state.products.map((product, index) => {
            if (product.status) {
                return (
                    <ProductComponent
                        key={product.id}
                        price={product.price}
                        image={product.image}
                        name={product.name}
                        onBtnClick={this.onBuyClicked}
                    />
                );
            }
        });
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand">Props</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <span className="label label-success">
                                            Label
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default State;
