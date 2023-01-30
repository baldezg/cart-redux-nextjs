import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';


describe('Home page', () => {
    it('O header foi renderizado', () => {
        const data = { products: [] };
        render(
        <Provider store={store}>
        <Home data={data}/>
        </Provider>
        );
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    })
    
    it('Skeleton renderiza enquanto os dados não são carregados', () => {
        const data = { products: [] };
        const {container} = 
        render(
            <Provider store={store}>
                <Home data={data}/>
            </Provider>
        );
        const skeleton = container.querySelector('.react-loading-skeleton');
        expect(skeleton).toBeInTheDocument();
    })

    it('Os produtos são mostrados na tela', () => {
        const data = { products: [
            {
                id: '1',
                name: 'Produto 1',
                description: 'Descrição do produto 1',
                photo: 'https://mks-challenge-api-frontend.herokuapp.com/images/1.jpg',
                price: 'R$ 100,00'
            },
            {
                id: '2',
                name: 'Produto 2',
                description: 'Descrição do produto 2',
                photo: 'https://mks-challenge-api-frontend.herokuapp.com/images/2.jpg',
                price: 'R$ 200,00'
            },
        ]};
        render(
        <Provider store={store}>
        <Home data={data}/>
        </Provider>);
        expect(screen.getByText('Produto 1')).toBeInTheDocument();
        expect(screen.getByText('Produto 2')).toBeInTheDocument();
    })
})