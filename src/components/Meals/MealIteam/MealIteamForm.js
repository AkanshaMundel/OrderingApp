import classes from './MealIteamForm.module.css'
import Input from './../../UI/input';
import {useRef,useState} from 'react';
const MealIteamForm = (props)=>{

    const amountInputRef = useRef();
    //to add to cart
    const[amountIsValid , setAmountIsValid]= useState(true);
    const submitHandler =event =>{
        //default is true 
      
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;//can access the current value throuh ref passed 
        const enteredAmountNumber = +enteredAmount; //convertinto string 

        //validation 
        if(enteredAmount.trim().length ===0 || 
             enteredAmountNumber <1 ||
             enteredAmountNumber >5
         ){
                setAmountIsValid(false);
                return ;
         }

         props.onAddToCart(enteredAmountNumber);//it is updated amt not simply price 
      //passed from mealitem form 
       
    }; //adding the form or item into the cart 


 return (
    <form className={classes.form} onSubmit={submitHandler}>
    
        <Input  //custom comp 
        ref ={amountInputRef} //go comp whereeeee u wana receive refs
         label ="Amount" input ={{
            id: 'amount_'+ props.id,
            type:'number',
            nim:'1',
            max:'5',
            step:'1',
            defaultValue :'1',
        }}
            />
        <button>+ ADD</button>
        {!amountIsValid && <p>Please enter a valid amt (1-5)</p>}
    </form>
);

};
export default MealIteamForm 




// Refs provide a way to access DOM nodes or React elements created in the render method. In









