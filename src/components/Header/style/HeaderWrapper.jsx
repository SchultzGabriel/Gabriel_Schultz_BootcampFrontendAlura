import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const HeaderWrapper = styled.header`
width: 100%;
background-color: ${({ theme }) => theme.colors.primary.main.color};
display:flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 2;
padding:1rem;

${breakpointMedia({
    sm: css`
        justify-content:center;
        `,
    md: css`
    position: absolute;
    flex-wrap:wrap;
    `,
  })};
`;

export { HeaderWrapper as default };
