import classes from './MealIteamForm.module.css'
import Input from './../../UI/input';
import {useRef} from 'react';
const MealIteamForm = (props)=>{
    const amountInputRef = useRef();
    //to add to cart
    const submitHandler =event =>{
        event.preventDefault();

    };
 return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref ={amountInputRef}
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
    </form>
);

}
export default MealIteamForm 




// Refs provide a way to access DOM nodes or React elements created in the render method. In









