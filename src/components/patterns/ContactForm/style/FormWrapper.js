import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const Form = styled.section`
display:flex;
flex-direction: column;
padding:1rem;
width:100%;
height:100%;
transition: ${({ theme }) => theme.transition};


form{
  display:flex;
  flex-direction: column;
  width:100%;
  height: 75%;
  justify-content:space-between;
  margin-bottom:50px;
}

${breakpointsMedia({
    xs: css`
    `,
    md: css`
    width:100%;
    margin-bottom:50px;
    `,
  })};
`;

export { Form as default };
