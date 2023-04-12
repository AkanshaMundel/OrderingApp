import  {useState} from 'react';
import Header from './components/Layout/Header';
 import Meals from  './components/Meals/Meals';
 import Cart from './components/Cart/Cart';
 import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown]= useState(false);

const showCartHandler = ()=>{
  setCartIsShown(true);
}
const hiddenCartHandler =() =>{
  setCartIsShown(false);
}
  return (
  //  <Fragment >
  <CartProvider> 
    { cartIsShown && <Cart  onClose={hiddenCartHandler}/>}
   <Header onShowCart= {showCartHandler} />
    <main>
       <Meals />
    </main>
   </CartProvider>
   
  );
}

export default App;

//fo rmodal we just passed handler button to header , hedder button 
//if multiple change we have to pass the fun into more comp thn we are usinf context 
//to manage the state we useStart 
//removing fragmnet eith provider comp in order to use all functionality given in cartprovider 

//here we get the number of output of cart item so header need to acces to cart  so using provider there as wrapper 
//in meal we add the item into our cart so we 