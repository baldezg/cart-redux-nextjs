import Image from 'next/image';
import styled from 'styled-components';

const Text = styled.p`
    font-weight: bold;
    margin-left: 5px;
    `;
    
type Props = {
    className?: string;
    icon: string;
    text?: string;
    onClick?: () => void;
};

const Button = (props : Props) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <Image src={props.icon} alt="shopping cart" width={20} height={20} />
            <Text>{props.text}</Text>
        </button>
    );
};

export default Button;