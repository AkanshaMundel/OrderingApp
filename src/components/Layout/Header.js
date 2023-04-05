import {Fragment} from 'react';
import mealimg from '../../asserts/foodheader.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props=> {
    return (<Fragment>
        <header className ={classes.header}>
            <h1>REACTMEALS</h1>
            {/* <button>Cart</button> */}.
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
          <div className ={classes['main-image']}>
            <img src ={mealimg} alt="table of delecious food!" />
          </div>
    </Fragment>
    );
};

export default Header;