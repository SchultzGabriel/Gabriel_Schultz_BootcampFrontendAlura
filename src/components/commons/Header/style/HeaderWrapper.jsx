import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const HeaderWrapper = styled.header`
width: 100%;
background-color: ${({ theme }) => theme.colors.primary.main.color};
display:flex;
align-items: center;
justify-content: space-between;
z-index: 2;
padding:1rem;
position:absolute;

div:nth-child(3){
display:none;
}

${breakpointMedia({
    sm: css`
div:nth-child(3){
display:flex;
}
        `,
    md: css`
    `,
  })};
`;

export { HeaderWrapper as default };
