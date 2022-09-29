// import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css"
import Router from './components/app/Router';
import { CartProvider } from './components/Context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;