import {useContext,useEffect,useState} from 'react';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

import CartContext from  '../../store/cart-context'




const HeaderCartButton =( props) =>{
  const[btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const{items} = cartCtx; 
  const numberOfCardItems = cartCtx.items.reduce((curNumber,item)=>{
return curNumber +item.amount;
  },0);

 
//adding the bump css animination
  const btnClasses = `${classes.button} ${btnIsHighlighted ?classes.bump :''}`;
  useEffect(()=>{
    if(items.length ===0){
      return ;
    }
    setBtnIsHighlighted(true);

   const timer=  setTimeout(()=>{
      setBtnIsHighlighted(false);
    },300);

    return ()=>{
      clearTimeout(timer);
    };

  },[items]);
    return (
        <button className={btnClasses} onClick= {props.onClick}>
          <span className={classes.icon}>
            <CartIcon/>
          </span>
          <span >
             Your Cart
          </span> 
          <span className= {classes.badge}>{numberOfCardItems}</span>
        </button>
    );
   
};
export default HeaderCartButton;

//here we get the number of output of cart item so header need to acces to cart  so using provider there as wrapper 

//requore the context and usecontext to get the number of output
// herer the output change nd provide into provider and reduce convert arry of data into single value