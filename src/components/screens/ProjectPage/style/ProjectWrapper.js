import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const ProjectWrapper = styled.section`
display:flex;
align-items: center;
justify-content: space-around;
height:100vh;
width:100%;
padding: 50px;
margin-left: 10%;

img{
    width:50%;
}

${breakpointsMedia({
    sm: css`
    padding-top: 200px;
    `,
    md: css`
    flex-direction: column;
    padding-top: 110px;
    margin:0;
    
    img{
        width:100%;
    }
    `,
  })}

`;

ProjectWrapper.TextArea = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    width:50%;
    padding: 50px;
    flex-shrink: 0;

${breakpointsMedia({
    xs: css`
    `,
    md: css`
    width:100%;
    justify-content: center;
    padding:0;
    `,
  })}
  `;

export { ProjectWrapper as default };
