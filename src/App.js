import Header from "./components/Header"
import Product from "./components/Product"
import SubProduct from "./components/SubProduct"
import AboutUs from "./components/AboutUs";
import './App.css';
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="background">
      <Header />
      <hr/>
      <Product />
      <SubProduct />
      <AboutUs />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
