import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Layout from './Layout';
import Error from '../../pages/Error';
import ItemDetail from '../Products/ItemDetail';
import Gamer from '../../pages/Gamer';
import Office from '../../pages/Office';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/category/:gamer" element={<Gamer />} />
                <Route path="/category/:office" element={<Office />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;