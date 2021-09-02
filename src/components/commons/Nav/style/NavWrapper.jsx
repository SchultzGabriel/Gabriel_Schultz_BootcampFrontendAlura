/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
display:flex;
flex-shrink:2;
justify-content:space-around;
padding: 1rem;
width:auto;
transition: ${({ theme }) => theme.transition};



${breakpointsMedia({
    sm: css`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    height:100vh;

    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};

`,
    md: css`
    /* width:100vw; */
    margin:0;
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

export { NavWrapper as default };
