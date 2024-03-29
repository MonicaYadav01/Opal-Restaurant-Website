import './App.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { Suspense,lazy } from 'react';

import Header from './components/Header/Header';

const  Home  = lazy(()=> import("./pages/Home/Home"));


import Menu from './pages/Menu/Menu';

const  Cart  =  lazy(()=> import("./pages/Cart/Cart"));

import Register from './pages/Register/Register';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Signin from './pages/Signin/Signin';
import Profile from './pages/Profile/Profile';


 


function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Suspense fallback={ <div>Loading...</div> } ><Home/></Suspense>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}> <Cart/> </Suspense>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={ <Signin/>} />
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;
