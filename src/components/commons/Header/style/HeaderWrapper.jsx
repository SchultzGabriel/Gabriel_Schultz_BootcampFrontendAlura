/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const HeaderWrapper = styled.header`
width: 20%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
z-index: 2;
padding:1rem;
transition: ${({ theme }) => theme.transition};
height:100vh;
position:fixed;

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
background-color: rgba(0, 0, 0, 0.8);
height:100vh;
width:100%;
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
    `,
  })};
`;

export { HeaderWrapper as default };
