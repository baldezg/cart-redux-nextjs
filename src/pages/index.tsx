import axios from 'axios';
import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import * as S from '../styles/styles'

type Props = {  
  data: {
    products: {
      id: string;
      name: string;
      description: string;
      image: string;
      price: string;
    }[]
  }
}

const Home: NextComponentType<AppProps, Props, Props> = ({ data }) => {
  const products = data;
  return ( 
    <>
    <Header />
    {products.length === 0 ? <Skeleton count={8} /> : null}
      {console.log(data)}
    <S.Main>   
      <S.MainSection>
        {products.map((product ) => {
          return(
            <ProductCard key={product.id} id={product.id} quantity={1} name={product.name} description={product.description} image={product.image} price={product.price} />
          )
        })}
      </S.MainSection> 
    </S.Main>
    </>
  )
  }

Home.getInitialProps = async () => {
  const res = await axios.get('https://fakestoreapi.com/products/');
  console.log(res.data)
  return {
    data: res.data
   
  }
  
}

export default Home;
