import React, {Component} from "react";

class Jsx extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return (<h2>
                id : {product.id} <br/>
                name: {product.name} <br/>
                price: {product.price} <br/>
                status: {product.status ? 'Active' : 'Pending'}
            </h2>);
        }
    }

    render() {
        var product = {
            id: 1,
            name: 'Iphone',
            price: 15000000,
            status: true
        };
        var users = [
            {
                id: 1,
                name: 'A',
                age: 18
            },
            {
                id: 2,
                name: 'BA',
                age: 19
            },
            {
                id: 3,
                name: 'c',
                age: 20
            }
        ];
        var elements = users.map((user, index) => {
            return <div key={index}>
                <h2>Tên: {user.name}</h2> <br/>
                <b>Tuổi: {user.age}</b><br/>
                <b key={index}>{index}</b>
            </div>
        });
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a>Home</a>
                        </li>
                        <li>
                            <a href="#" >Link</a>
                        </li>
                    </ul>
                </nav>
                <div className="ml-30">
                    {this.showInfoProduct(product)}
                    <br/>
                    <hr/>
                    {elements}
                </div>
            </div>
        )
    };

}

export default Jsx;