import classes from './MealIteam.module.css'
import MealIteamForm  from './MealIteamForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';


const MealItem = props =>{
  const cartCtx =   useContext(CartContext);//TO ESTABLISH THE CONNECTION
    const price =`$${props.price.toFixed(2)}`
    //mrthid find in context comp 
    const addToCartHandler = amount =>{
           cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount :amount,
            price: props.price
           });    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    };

return (<li className={classes.meal}>
    <div >
    <h3>{props.name}</h3>
   <div className={classes.description}>{props.description}</div>
   <div className={classes.price}>{price}</div>
    </div>
    <div>
      <MealIteamForm id={props.id}onAddToCart ={addToCartHandler}/>
    </div>
</li>
);
};
export default MealItem;
 //this props name dpend on progrm but shou;d same as the passed in props whers this fun uses