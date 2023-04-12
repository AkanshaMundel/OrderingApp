import {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState ={
    items:[],
    totalAmount:0
};
const cartReducer =(state, action)=>{
    if(action.type ==='ADD'){
        // const updatedItem= state.items.concat(action.item); //concat give new arr  not edit the old state 
        const updatedTotalAmount = state.totalAmount+action.item.price*action.item.amount;
        //checking if exciting cart prent in arr
        const existingCartItemIndex = state.items.findIndex(item=>item.id ===action.item.id);
        //setting the indx to current one 
        const excitingCartItem = state.items[existingCartItemIndex];

       
        let updatedItems;
        if(excitingCartItem){
         const   updatedItem = {
                ...excitingCartItem,//idx name would be same only updaete the prixe 
                amount: excitingCartItem.amount+ action.item.amount
            };
            updatedItems = [...state.items]; //return ing new arr immutable by copying new entries
            updatedItems[existingCartItemIndex]= updatedItem;
        }
        else{
            //if not present thn 
            // updatedItem = {...action.item};
            updatedItems = state.items.concat(action.item);
        }
        return {
            items:updatedItems,
            totalAmount : updatedTotalAmount //retturn new item as in cart arry but have to chnge smae name could be added same 

        };
    }
    //logic to remove the item from cart 
    if(action.type ==='REMOVE'){
        //finding cart item 
        const existingCartItemIndex = state.items.findIndex(
            (item) =>item.id ===action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount===1){
            updatedItems = state.items.filter(item=> item.id !==action.id);

        }
        else{
            const updatedItem = {...existingItem, amount: existingItem.amount-1};
             updatedItems = [...state.items];
             updatedItems[existingCartItemIndex]= updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount :updatedTotalAmount
        };

    }
    return defaultCartState;
};
//arry destructing function 
 const CartProvider = props =>{
    const[cartState, dispatchCartAction]= useReducer(cartReducer,defaultCartState);

    const addItemCartHandler = (item) =>{
       dispatchCartAction({type:`ADD`,item:item}); //type of activity healp to identify the type of action in cartreducer 
    };
    //checking alreaday present a item in cart checking using reduced state 

    const removeItemFromCartHandler = id =>{
        dispatchCartAction({type:'REMOVE',id:id});
    };
 
 
 const cartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler


 };
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
};
export default CartProvider;

//it just tranfer data to all comp tht asscee with this comp provider
// to use React context, you need to create a provider and a consumer. You can create consumers in two different ways, either as a hook or by using a “render prop”.
// Why do we need a context provider?
// The purpose for having a Context Provider wrap around children is to keep track of state and props, read on how state and props between parents and children affect each other

// The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object. The useReducer Hook returns the current state and a dispatch method.