import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const Form = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
padding:1rem;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
    width:100vw;
    `,
  })};
`;

export { Form as default };
