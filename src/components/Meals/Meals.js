import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealsSummary";
import {Fragment} from 'react';
const Meals = ()=>{
    
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeals />
        </Fragment>
    );
}
export default Meals;