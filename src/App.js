// import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css"
import Router from './components/app/Router';
import { CartProvider } from './components/Context/CartContext';
// import { createItem, deleteItem, getItem, getItemById, getItems, getProducts } from "./components/app/api";
// import { Button } from "react-bootstrap";



function App() {
  return (
    <CartProvider>
      <Router />
      {/* <Button onClick={async () => {
        console.clear();
        getProducts.then(data => data.forEach(i => {
          createItem(i)
        }))

        getItems().then(data => console.log(data))
      }
      }>AGREGAR ITEMS</Button>

      <Button onClick={() => {
        getItems().then(data => data.forEach(item => {
          deleteItem(item.id)
        }))

        getItems().then(data => console.log(data))
      }
      }>BORRAR ITEMS</Button> */}
    </CartProvider >
  );
}

export default App;