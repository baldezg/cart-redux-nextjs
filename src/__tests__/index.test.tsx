import { render, screen } from '@testing-library/react';

import Home from '../pages/index';
import '@testing-library/jest-dom';


test('renders heading', () => {
    render(<Home data={{products :[]}}/>);
    const headingElement = screen.getByText(/MKS/i);
    expect(headingElement).toBeInTheDocument();
    })







