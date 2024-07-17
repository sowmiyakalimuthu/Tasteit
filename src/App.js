import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Signup from './components/Signup';
import Foodlist from './components/Foodlist';
import Details from './components/Details';
import Searchlist from './components/Searchlist';

function App() {

  return (
    <div>
     <Headers/>
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/login' element={<Login />}/>
      <Route  path='/signup' element={<Signup />}/>
      <Route  path='/foodlist' element={<Foodlist />}/>
      <Route  path='/details' element={<Details />}/>
      <Route  path='/search' element={<Searchlist />}/>
     </Routes>
     <Toaster />
    </div>
  );
}

export default App;
