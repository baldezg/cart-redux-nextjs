import axios from 'axios';
import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import Footer from '../components/Footer/Footer';
import * as S from '../styles/styles'

type Props = {  
  data: {
    products: {
      id: string;
      name: string;
      description: string;
      photo: string;
      price: string;
    }[]
  }
}

const Home: NextComponentType<AppProps, Props, Props> = ({ data }) => {
  const products = data.products;
  return ( 
    <>
    <Header />
    {products.length === 0 ? <Skeleton count={8} /> : null}
      
    <S.Main>   
      <S.MainSection>
        {products.map((product ) => {
          return(
            <ProductCard key={product.id} id={product.id} quantity={1} name={product.name} description={product.description} photo={product.photo} price={product.price} />
          )
        })}
      </S.MainSection> 
    </S.Main>
    <Footer />
    </>
  )
  }

Home.getInitialProps = async () => {
  const res = await axios.get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');

  return {
    data: res.data
  }
}

export default Home;
