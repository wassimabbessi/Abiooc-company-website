import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Shipping from './Shipping';
import Payment from './Payment';
import Product from './Product';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminEditProduct from './AdminEditProduct';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import PrivateLabel from './PrivateLabel';
import Wholesale from './Wholesale';
import OurLand from './OurLand';
import News from './News';
import Production from './Production';
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product/:productId" element={<Product />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privatelabel" element={<PrivateLabel />} />
        <Route exact path="/wholesale" element={<Wholesale />} />
        <Route exact path="/ourland" element={<OurLand />} />
        <Route exact path="/News" element={<News />} />
        <Route exact path="/Production" element={<Production />} />
        {/* protected user routes */}
        <Route element={<UserRoute />}>
          <Route exact path="/user/dashboard" element={<UserDashboard />} />
        </Route>
        {/* protected admin routes */}
        <Route element={<AdminRoute />}>
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route
            exact
            path="/admin/edit/product/:productId"
            element={<AdminEditProduct />}
          />
        </Route>

        <Route element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
