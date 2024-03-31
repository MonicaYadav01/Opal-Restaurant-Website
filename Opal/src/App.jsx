import './App.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { Suspense,lazy } from 'react';

const Header = lazy (()=> import('./components/Header/Header'));
const  Home  = lazy(()=> import("./pages/Home/Home"));
const Menu = lazy (()=> import('./pages/Menu/Menu'));
const  Cart  =  lazy(()=> import("./pages/Cart/Cart"));
const Register = lazy(()=> import('./pages/Register/Register'));
const About = lazy(()=>  import('./pages/About/About'));
const Footer = lazy(()=> import('./components/Footer/Footer'));
const Signin = lazy(()=> import('./pages/Signin/Signin'));
const Profile = lazy(()=> import('./pages/Profile/Profile'));
const Ordersuccesful = lazy(()=> import('./components/Cart/Ordersuccesful'))


 


function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Suspense fallback={ <div>Loading...</div> } ><Home/></Suspense>} />
      <Route path='/menu' element={<Suspense fallback ={<div>Loading...</div>}><Menu/></Suspense>} />
      <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}><About/></Suspense>} />
      <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}> <Cart/> </Suspense>} />
      <Route path='/register' element={<Suspense fallback={<div>Loading...</div>}><Register/></Suspense>} />
      <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Signin/></Suspense>} />
      <Route path='/profile' element={<Suspense fallback={<div>Loading...</div>}><Profile/></Suspense>}/>
      <Route path='/ordersucessful' element={<Suspense fallback={<div>Loading...</div>}><Ordersuccesful/></Suspense>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;
