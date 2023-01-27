import {render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import '@testing-library/jest-dom';
import React from 'react';

describe('Verifica se o Header renderizou corretamente', () => {
    test('Há um título', () => {
        render(<Header/>)
        const title = screen.getByText(/MKS/i)
        expect(title).toBeInTheDocument()
    });
    test('Há um botão de checkout', () => {
        render(<Header/>)
        const checkoutButton = screen.getByRole('button', {name: /0/i})
        expect(checkoutButton).toBeInTheDocument()
    });
});

