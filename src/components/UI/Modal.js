import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props =>{
    return <div className = {classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = props =>{
    return (<div className={classes.modal}>
        <div className= {classes.content}>{props.children}</div>
    </div>);
}

const portalElement = document.getElementById('overlays');
const Modal = props =>{
    return ( <Fragment>
     
     {ReactDOM.createPortal (<Backdrop onClose={props.onClose} />,portalElement)}
     {ReactDOM.createPortal (<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>);
}
export default Modal;


// What are the benefits of React portal?
// React Portal comes in handy when we need to render child components outside the normal DOM hierarchy without breaking the event propagation's default behavior through the React component tree hierarchy.