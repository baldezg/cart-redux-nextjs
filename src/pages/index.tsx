import { NextPage } from 'next';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import * as S from '../styles/styles';
import axios from 'axios';

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
};

type Props = {
  products: Product[];
};

const Home: NextPage<Props> = ({ products }) => {
  // if (!products) {
  //   return (
  //     <>
  //       <Header />
  //       <Skeleton height={800} count={5} baseColor="#141414"/>
  //       <Skeleton height={800} count={5} baseColor="#141414"/>
  //       <Skeleton height={800} count={5} baseColor="#141414"/>
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <S.Main>
        <S.MainSection>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              quantity={1}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </S.MainSection>
      </S.Main>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await axios.get('https://fakestoreapi.com/products/');
  const products = res.data;

  return {
    products,
  };
};

export default Home;

