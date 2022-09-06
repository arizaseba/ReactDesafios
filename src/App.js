import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/NavBar/ItemCount';
import NavBar from './components/NavBar/NavBar'
import Producto from './components/Producto.js'

function App() {
  const productList = [];
  const addItem = item => {
    productList.push(new Producto(item, `Producto ${item}`))
    console.log(productList);
  };

  return (
    <>
      <NavBar productList={productList} />
      <ItemCount stock={5} initial={1} onAdd={addItem} />
    </>
  );
}

export default App;
