import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const ContactWrapper = styled.div`
display:flex;
align-items: center;
width:100%;
height:100%;
min-height:100vh;
margin-left:10%;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
        height:auto;
        margin:0;
        flex-direction: column;
        justify-content: center;
    `,
  })}
`;

ContactWrapper.Form = styled.div`
height: 100vh;
width:50%;
display: flex;
flex-direction: column;
justify-content: center;
padding:50px;


${breakpointsMedia({
    xs: css`
    `,
    md: css`
        margin:0;
        width:100%;
        height: 100vh;
        padding:10px;
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
