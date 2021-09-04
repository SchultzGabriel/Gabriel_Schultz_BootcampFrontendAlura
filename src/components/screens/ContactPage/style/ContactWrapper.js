import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const ContactWrapper = styled.div`
display:flex;
align-items: flex-start;
width:100%;
height:100%;
min-height:100vh;
padding: 1rem;
margin-left:20%;
padding-top:100px;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
        height:auto;
        margin:0;
        flex-direction: column;
    `,
  })}
`;

ContactWrapper.Form = styled.div`
height: 550px;
width:50%;
display: flex;
flex-direction: column;
justify-content: center;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
        margin:0;
        width:100%;
        height: 100vh;
    `,
  })}
`;

ContactWrapper.Map = styled.div`
height: 400px;
width:50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
        margin:0;
        width:100%;
        height: 100vh;
    `,
  })}
`;

export { ContactWrapper as default };
