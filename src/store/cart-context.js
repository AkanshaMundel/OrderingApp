
import React from 'react';


const CartContext = React.createContext({
    items:[],
    totalAmount :0,
    addItem :(item)=>{},
    removeItem:(id)=>{}
});

export default CartContext;


//STATE MAGAMT KIND OFF 






//initital sthe dummy data  and use useredudcer for update thr data
//in modal we use proops drilling sendinf through props but herer we using the context to updae bd passed 
//for using the context to using the data psiing in all the different cp like same time have to update the amt ON CART ND THT TO IN POPS  t
// The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent,
// Is React context an API?
// The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.