import Checkout from "../Checkout/Checkout";
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg'
const StyledHeader = styled.header`
    align-items: center;
    background-color: #b388eb;
    color: #fff;
    display: flex;
    height: 6.5rem;
    justify-content: space-between;
    padding: 0 4rem 0 3rem;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`;


function Header() {    
    return (
        <StyledHeader data-testid="header">
            <Image alt="logo" width={200} height={100} src={logo}/>
            <Checkout />
        </StyledHeader>
    );
    }

export default Header;