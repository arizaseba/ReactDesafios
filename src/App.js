import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import ItemList from './components/ItemList';
import NavBar from './components/NavBar/NavBar'
import Producto from './components/app/Producto';
import ItemDetailContainer from './components/ItemDetailContainer';

const cartList = [];
const addItem = item => {
  let prod = new Producto(item.id, item.title, item.color, item.stock, item.img, item.price);
  if (!cartList.find(p => p.id === prod.id))
    cartList.push(prod)
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
        {/* <ItemList onAdd={addItem} /> */}
        {/* <ItemCount stock={5} initial={1} onAdd={addItem} /> */}
        <ItemDetailContainer onAdd={addItem} />
      </Container>
    </>
  );
}

export default App;
