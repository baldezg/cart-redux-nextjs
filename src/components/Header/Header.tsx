import DialogExample from "../Checkout/Checkout";

function Header() {    
    return (
        <header data-testid="header" className="header">
            <h1>MKS<span>Sistemas</span></h1>
            <DialogExample />
        </header>
    );
    }

export default Header;