import classes from './MealIteam.module.css'
import MealIteamForm  from './MealIteamForm';

const MealItem = props =>{

    const pric =`$${props.pric.toFixed(2)}`
return <li className={classes.meal}>
    <div >
    <h3>{props.name}</h3>
   <div className={classes.description}>{props.description}</div>
   <div className={classes.price}>{pric}</div>
    </div>
    <div>
      <MealIteamForm id= {props.id}/>
    </div>
</li>
}
export default MealItem;
 //this props name dpend on progrm but shou;d same as the passed in props whers this fun uses