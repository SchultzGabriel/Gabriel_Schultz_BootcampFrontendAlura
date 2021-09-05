import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const IndexWrapper = styled.main`
    display:flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    margin-left: 20%;
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
`;

export { IndexWrapper as default };
