import styled from 'styled-components';
import Button from '../Button/Button';
import Image from 'next/image';

export const Card = styled.div`
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 #ccc;
    width: 14rem; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
    }
    
`;
export const StyledImage = styled(Image)`
    align-self: center;
`;
export const Name = styled.h2`
    color: #2C2C2C;
    font-size: 1.2rem;
    font-weight: 400;
`;
export const Price = styled.h2`
    background-color: #373737;
    border-radius:5px;
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
    padding: .2rem .5rem;
`;
export const CardInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 .5rem;
    margin-top: .5rem;
`;
export const Description = styled.p`
    color: #2C2C2C;
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: .7rem;
    padding: 0 .5rem;
`;
export const ButtonBuy = styled(Button)`
    background-color: #0F52BA;
    border-radius: 0 0 8px 8px;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
    padding: .3rem 0;
    width: 100%;

    &:hover {
        background-color: #FFC107;
        cursor: pointer;
    }
    
`;