import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Layout from './Layout';
import Error from '../../pages/Error';
import ItemDetail from '../Products/ItemDetail';
import Category from '../../pages/Category';
import CartPage from '../../pages/CartPage';
import Admin from '../../pages/Admin';
import CheckoutPage from '../../pages/CheckoutPage';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout/:id" element={<CheckoutPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;