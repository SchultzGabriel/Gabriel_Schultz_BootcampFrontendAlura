import styled from 'styled-components';

const NavWrapper = styled.nav`
display:flex;
flex-wrap: wrap;
padding: 1rem;
`;

NavWrapper.Anchor = styled.a`
margin-left: 1rem;
text-decoration: none;
color: ${({ theme }) => theme.colors.primary.main.contrastText};
&&:hover{
    transition: ${({ theme }) => theme.transition};
    filter:opacity(.5);
}
`;

export { NavWrapper as default };
