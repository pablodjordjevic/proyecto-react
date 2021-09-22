import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './CartNav.css'



function CartNav() {
return (
  <div className="iconoCart">
    <FontAwesomeIcon className="m-3" size="lg" icon={faSearch}></FontAwesomeIcon>
    <FontAwesomeIcon className="m-3" size="lg" icon={faShoppingCart}></FontAwesomeIcon>
  </div>
)
}


export default CartNav;