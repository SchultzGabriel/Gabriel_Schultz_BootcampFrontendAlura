import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
display:flex;
justify-content:space-around;
flex-wrap: wrap;
padding: 1rem;
width:300px;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
    width:100vw;
    flex-wrap:nowrap;
    `,
  })};
`;

NavWrapper.Anchor = styled.button`
/* margin-left: 1rem; */
background-color: ${({ theme }) => theme.colors.secondary.main.color};
color: ${({ theme }) => theme.colors.primary.main.contrastText};
&&:hover{
    transition: ${({ theme }) => theme.transition};
    filter:opacity(.5);
    cursor:pointer;
}

${breakpointsMedia({
    xs: css`
    `,
    md: css`
    margin-bottom: 1rem;
    width: 120px;
    
    `,
  })};
`;

NavWrapper.Contact = styled.button`
position: fixed;
right: 10px;
bottom: 10px;
display:flex;
align-items:center;
border:none;
background-color:black;
border-radius:50px;
transition: ${({ theme }) => theme.transition};

&&:hover{
  cursor:pointer;
  filter:invert();
}

img{
  width:50px;
  filter:invert();
}
`;

export { NavWrapper as default };
