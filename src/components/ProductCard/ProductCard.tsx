import React from 'react';
import ShoppingBagOpen from '../../assets/img/shopping-bag.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import * as S from './styles'

type Props = {
    name: string;
    description: string;
    image: string;
    price: string;
    quantity: number;
    id: string;
    
}

const hideDescription = (description: string) => {
    if (description.length > 50) {
        return description.substring(0, 50) + "...";
    } else {
        return description;
    }
}

const formatPrice = (price: string) => {
    const priceNumber = Number(price);
    priceNumber.toFixed(0);
    return priceNumber.toString();
}

const ProductCard = (props : Props) => {

    const dispatch = useDispatch();

    return (
        <S.Card>
            <S.StyledImage alt={props.description} src={props.image} width={200} height={200} />
            <S.CardInfo>
            <S.Name>{props.name}</S.Name>
            <S.Price>R${formatPrice(props.price)}</S.Price>
            </S.CardInfo>
            <S.Description>{hideDescription(props.description)}</S.Description>
            <S.ButtonBuy icon={ShoppingBagOpen} text="COMPRAR" onClick={() => dispatch(addToCart(props))}/>
        </S.Card>
            
    )
}

export default ProductCard;
