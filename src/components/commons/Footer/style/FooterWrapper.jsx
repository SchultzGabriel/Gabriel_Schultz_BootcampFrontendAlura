import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const FooterWrapper = styled.footer`
width:100%;
display:flex;
justify-content: center;

${breakpointMedia({
    sm: css`
    width:100%;
`,
    md: css`
width:50%;
    `,
  })};

`;

FooterWrapper.Icon = styled.div`
display:flex;
align-items:center;
justify-content: center;
width:30%;

a{
    display: flex;
    justify-content: center;
    width: 30%;
}
a:hover{
    transition: ${({ theme }) => theme.transition};
    filter:opacity(.5);
}

img{
    filter: invert();
    height: inherit;
    width:20px;
}
`;

export { FooterWrapper as default };
