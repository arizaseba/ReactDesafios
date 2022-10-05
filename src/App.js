import "bootswatch/dist/lux/bootstrap.min.css"
import Router from './components/app/Router';
import { CartProvider } from './components/Context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider >
  );
}

export default App;