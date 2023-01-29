import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    place-items: center;
    margin:100px;
    @media (max-width: 768px) {
        margin: 0;
    }

`;
export const MainSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: .5rem;
    padding-top: 1rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    
`;
