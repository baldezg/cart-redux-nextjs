import React from 'react';
import shoppingCart from '../../assets/img/shopping-cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cart.slice';
import * as S from './styles';
import * as Dialog from '@radix-ui/react-dialog';

export default function Checkout() {
    
    type State = {
        cart: {
            items: {
                id: string;
                name: string;
                price: number;
                quantity: number;
                photo: string;
            }[];
        };
    };

    const cart = useSelector((state : State) => state.cart);
    const dispatch = useDispatch();
    
    const getItemsCount = () => {
         return cart.items.reduce((accumulator, item) => accumulator + item.quantity, 0).toString();
      };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <S.CheckoutButton icon={shoppingCart} text={getItemsCount()} />
            </Dialog.Trigger>

            <Dialog.Portal>
                <S.StyledDialogOverlay>
                <Dialog.Content>
                    <div>
                    <S.Title>Carrinho <br />de Compras</S.Title>
                    <S.Close>
                        X
                    </S.Close>
                    </div>
                    <S.Wrapper>
                    {cart.items.length === 0 ? (
                        <Dialog.Description>
                            <S.Msg>Seu carrinho está vazio</S.Msg>
                        </Dialog.Description>
                    ) : ( 
                        <Dialog.Description className="DialogDescription">
                            <ul>
                                {cart.items.map((item) => (
                                    <li key={item.id}>
                                        <S.Item>
                                            <S.ItemImage src={item.photo} width={50} height={50} alt={item.name} />
                                            <S.ItemName>{item.name}</S.ItemName>
                                            <S.ItemQuantity>
                                                <span>
                                                    Qtd:
                                                </span>
                                            <S.QuantityDisplay>
                                                <S.QuantityChange onClick={() => dispatch(decrementQuantity(item.id))}>-</S.QuantityChange>
                                                <S.Quantity>
                                                    {item.quantity}
                                                </S.Quantity>
                                                <S.QuantityChange onClick={() => dispatch(incrementQuantity(item.id))}>+</S.QuantityChange>
                                            </S.QuantityDisplay>
                                            </S.ItemQuantity>
                                            <S.ItemPrice>
                                                R$ {Math.floor(item.price)}
                                            </S.ItemPrice>
                                           <S.ItemRemove onClick={() => dispatch(removeFromCart(item.id))}>X</S.ItemRemove>
                                        </S.Item>
                                    </li>
                                ))}
                            </ul>
                        </Dialog.Description>
                    )}
                    </S.Wrapper>
                    <S.Container>
                        <S.Total>
                            <p>Total:</p>
                            <p>
                                R$ {cart.items.reduce((total, item) => total + item.price * item.quantity, 0)}
                            </p>
                        </S.Total>
                        <S.Checkout>FINALIZAR COMPRA</S.Checkout>
                    </S.Container>
                </Dialog.Content>
                </S.StyledDialogOverlay>
            </Dialog.Portal>
            </Dialog.Root>
    );
    }

    
