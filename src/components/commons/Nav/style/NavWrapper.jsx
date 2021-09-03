/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
display:flex;
flex-direction: column;
align-items:center;
justify-content: space-around;
flex-shrink:0;
width:auto;
height:70%;


${breakpointsMedia({
    sm: css`

`,
    md: css`
width:auto;
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
