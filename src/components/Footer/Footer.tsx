import styled from 'styled-components';

const StyledFooter = styled.footer`
background-color: #eeeeee;
text-align: center;
padding: 1rem;
`;
export default function Footer() {
    return (
        <StyledFooter className="footer">
            <p>MKS Sstemas &copy; Todos os direitos reservados</p>
        </StyledFooter>
    );
}