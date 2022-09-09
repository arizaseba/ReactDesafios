import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ItemList from './components/ItemList';
import NavBar from './components/NavBar/NavBar'
import Producto from './components/Producto.js'

const productList = [];
productList.push(new Producto(1, "Silla Gamer Weracer Mod Wemax", "Negro", 16, "silla1.jpg", "38.000"))
productList.push(new Producto(2, "Silla Gamer Weracer Mod Wepower", "Blanco", 23, "silla2.jpg", "49.200"))
productList.push(new Producto(3, "Silla Gamer Weracer Mod Wepower", "Rojo", 32, "silla3.jpg", "55.000"))
console.log("productList: ", productList);

const cartList = [];
const addItem = item => {
  if (!cartList.find(p => p.item === item))
    cartList.push({ item })
  document.getElementById("cart_count").innerHTML = cartList.length;
  console.log("cartList: ", cartList);
};

function App() {
  return (
    <>
      <header>
        <NavBar cartList={cartList} />
      </header>
      <Container className='my-4'>
        <ItemList productList={productList} onAdd={addItem} />
        {/* <ItemCount stock={5} initial={1} onAdd={addItem} /> */}
      </Container>
    </>
  );
}

export default App;
