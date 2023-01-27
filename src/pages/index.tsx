import axios from 'axios';
import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../components/Header/Header';
import Image from 'next/image';
import styles from '../styles/Home.module.css'

type Props = {  
  data: {
    products: {
      id: number;
      name: string;
      description: string;
      photo: string;
      price: string;
    }[]
  }
}


const Home: NextComponentType<AppProps, Props, Props> = ({ data }) => {
  console.log(data);
  const products = data.products;
  return ( 
    <>
    <Header />
    {products.length === 0 ? <Skeleton {...{'data-testid':'skeleton'}} count={8} /> : null}
    <main className={styles.main}>
    {products.map((product ) => {
      return(
        <div data-testid='product' key={product.id}>
          <Image src={product.photo} alt={product.name} width={200} height={200} />
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <button>Adicionar ao carrinho</button>
        </div>
      )
    })}
    </main>
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
