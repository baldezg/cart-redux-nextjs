import Button from '../Button/Button';
import shoppingCart from '../../assets/img/shopping-cart.svg';

function Header() {
    return (
        <div className="header">
            <h1>MKS<span>Sistemas</span></h1>
            <Button className="btn-checkout" icon={shoppingCart} text="0" onClick={() => {
                alert('clicou')
            }} />
        </div>
    );
    }

export default Header;