import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const AboutWrapper = styled.main`
    width:100%;
    min-height: 100vh;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: space-around;
    margin-left: 20%;

    ${breakpointsMedia({
    xs: css`
    `,
    md: css`
        margin:0;
    `,
  })}
`;

AboutWrapper.TextArea = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;


${breakpointsMedia({
    xs: css`
    `,
    md: css`
        width:100%;
    `,
  })}
`;

AboutWrapper.PhotoArea = styled.div`
    width:40%;
    padding:1rem;

    img{
        width:100%;
        border-radius: 50%;
    }

    ${breakpointsMedia({
    xs: css`
    `,
    md: css`
        display:none;
    `,
  })}
`;

export { AboutWrapper as default };
