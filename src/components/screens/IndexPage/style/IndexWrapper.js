import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const IndexWrapper = styled.main`
    display:flex;
    padding:50px;
    margin-left: 10%;
    padding-top: 100px;
    height:100%;
    min-height:100vh;
    width:100%;


    ${breakpointsMedia({
    xs: css`
    `,
    md: css`
        margin:0;
    `,
  })}
`;

IndexWrapper.TextArea = styled.div`
width:50%;
height:100%;
padding:1rem;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
        width:100%;
    `,
  })}
`;

export { IndexWrapper as default };
