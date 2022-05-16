function Product() {
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
                <img alt="iphone" src="https://www.techone.vn/wp-content/uploads/2021/09/xanh-1-500x500.jpg" />
                <div className="caption">
                    <div>
                        <h3>iphone 6</h3>
                        <p>
                            16.000.000 VNĐ
                        </p>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-success">Mua hàng</button>
        </div>
    );
}

export default Product;
