import React, { Component } from "react";

class ProductComponent extends Component {
    render() {
        return (
            <div>
                <div class="col-xs-4  col-sm-4  col-md-4  col-lg-4 ">
                    <div class="thumbnail">
                        <img  alt={this.props.children} src={this.props.image}/>
                            <div class="caption">
                                <h3>{this.props.children}</h3>
                                <p>
                                    {this.props.price}
                                </p>
                                <p>
                                    <a href="#" class="btn btn-primary">Mua ngay</a>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default ProductComponent;