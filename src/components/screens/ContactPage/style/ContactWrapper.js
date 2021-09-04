import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const ContactWrapper = styled.div`
display:flex;
align-items: center;
width:100%;
height:100%;
min-height:100vh;
margin-left:20%;

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
height: 50%;
width:50%;
display: flex;
flex-direction: column;
justify-content: center;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
        padding-top:100px;
        margin:0;
        width:100%;
        height: 100vh;
    `,
  })}
`;

ContactWrapper.Map = styled.div`
height: 100%;
width:50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

iframe{
  border:none;
  filter: invert(1) contrast(1) hue-rotate(180deg);
}


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
