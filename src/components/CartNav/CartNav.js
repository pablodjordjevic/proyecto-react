import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import './CartNav.css'


function CartNav() {
return (
  <div className="iconoCart">
    <FontAwesomeIcon className="m-2" size="lg" icon={faShoppingCart}></FontAwesomeIcon>
  </div>
)
}


export default CartNav;