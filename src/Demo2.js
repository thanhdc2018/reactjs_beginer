import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function Demo2() {
  return (
    <div>
      <h1>app component</h1>
      <Header></Header>
      <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Product></Product>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product></Product>
            </div>
        </div>

    </div>
  );
}
  
export default Demo2;
