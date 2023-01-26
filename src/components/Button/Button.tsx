import Image from 'next/image';

type Props = {
    className: string;
    icon: string;
    text: string;
    onClick: () => void;
};

const Button = (props : Props) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <Image src={props.icon} alt="shopping cart" width={20} height={20} />
            {props.text}
        </button>
    );
};

export default Button;