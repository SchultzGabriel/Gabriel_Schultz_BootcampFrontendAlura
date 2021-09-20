import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const IndexWrapper = styled.main`
    position:relative;
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
width:100%;
height:100%;
padding:1rem;
display:flex;
flex-direction: column;
justify-content: space-around;

a{
  display:flex;
  justify-content: center;
  position:absolute;
  bottom:100px;
  width:100px;
  display:flex;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding:5px 0 5px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  transition: ${({ theme }) => theme.transition};
}

a:hover{
  background-color:${({ theme }) => theme.colors.primary.main.contrastText};
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
}

${breakpointsMedia({
    xs: css`
    `,
    md: css`
        width:100%;

        a{
          left:50%;
          margin-left: -50px;
        }
    `,
  })}
`;

export { IndexWrapper as default };
