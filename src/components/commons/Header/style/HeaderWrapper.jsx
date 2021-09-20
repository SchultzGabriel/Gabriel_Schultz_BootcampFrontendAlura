/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const HeaderWrapper = styled.header`
background-color:#222;
width: 10%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
z-index: 2;
padding:1rem 0 1rem 0;
transition: ${({ theme }) => theme.transition};
height:100vh;
position:fixed;
border-right: 1px solid ${({ theme }) => theme.colors.borders.main.color};


${breakpointMedia({
    sm: css`
`,
    md: css`
    /* justify-content:center; */
position: fixed;
top:0;
bottom:0;
left:0;
right:0;
height:100vh;
width:100%;
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
    `,
  })};
`;

export { HeaderWrapper as default };
