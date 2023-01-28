//create beautiful cards to e-commerce
import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from './ProductCard.module.css';
import shoppingCart from '../../assets/img/shopping-cart.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';

type Props = {
    name: string;
    description: string;
    photo: string;
    price: string;
    quantity: number;
    id: string;
    
}

const ProductCard = (props : Props) => {

    const dispatch = useDispatch();


    

    return (
        <div className={styles.card}>
            <Image alt={props.description} src={props.photo} width={100} height={100} />
            <div className={styles.card__info}>
            <h2>{props.name}</h2>
            <h2 className={styles.card__price}>{props.price}</h2>
            </div>
            <p>{props.description}</p>
            <Button className={styles.card__btn} icon={shoppingCart} text="COMPRAR" onClick={() => dispatch(addToCart(props))}/>
        </div>
            
    )
}

export default ProductCard;
