import {Route,Routes,BrowserRouter,Navigate} from "react-router-dom";

import Register from "./components/Register"
import Home from "./components/Home"
import LoginWrapper from './components/LoginWrapper';
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import './App.css';

const App=()=>(<div className='App'>
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<LoginWrapper/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </BrowserRouter>
</div>)

export default App;
