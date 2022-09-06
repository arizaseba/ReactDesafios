import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/NavBar/ItemCount';
import NavBar from './components/NavBar/NavBar'
import Producto from './components/Producto.js'

const productList = [];
const addItem = item => {
  productList.push(new Producto(item, `Producto ${item}`))
  document.getElementById("cart_count").innerHTML = item;
  console.log(productList);
};

function App() {
  return (
    <>
      <NavBar productList={productList} />
      <ItemCount stock={5} initial={1} onAdd={addItem} />
    </>
  );
}

export default App;
