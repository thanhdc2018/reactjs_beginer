import React, { Component } from "react";

class ProductComponent extends Component {
  render() {
    const { name, image, price, onBtnClick } = this.props;

    return (
      <div className="col-xs-4  col-sm-4  col-md-4  col-lg-4 phone-widget">
        <div className="thumbnail">
          <img className="product-image" alt={name} src={image} />
          <div className="caption">
            <h3>{name}</h3>
            <p>{price}</p>
            <p>
              <button href="#" className="btn btn-primary" onClick={onBtnClick}>
                Mua ngay
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
