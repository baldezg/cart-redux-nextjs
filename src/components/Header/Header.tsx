import Checkout from "../Checkout/Checkout";
import styled from 'styled-components';

const StyledHeader = styled.header`
    align-items: center;
    background-color: #0F52BA;
    color: #fff;
    display: flex;
    height: 6.5rem;
    justify-content: space-between;
    padding: 0 4rem 0 3rem;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    span {	
        font-size: 1rem;
        font-weight: normal;
        margin-left: .5rem;
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
        span {
            font-size: .8rem;
        }
    }
`;
function Header() {    
    return (
        <StyledHeader data-testid="header">
            <Title>MKS<span>Sistemas</span></Title>
            <Checkout />
        </StyledHeader>
    );
    }

export default Header;