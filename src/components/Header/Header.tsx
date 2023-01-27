import Button from '../Button/Button';
import shoppingCart from '../../assets/img/shopping-cart.svg';

function Header() {
    return (
        <header data-testid="header" className="header">
            <h1>MKS<span>Sistemas</span></h1>
            <Button className="btn-checkout" icon={shoppingCart} text="0" onClick={() => {
                alert('clicou')
            }} />
        </header>
    );
    }

export default Header;