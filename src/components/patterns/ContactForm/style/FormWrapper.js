import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const Form = styled.section`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content:space-between;
padding:1rem;
width:100%;
height:100%;
transition: ${({ theme }) => theme.transition};


form{
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  width:100%;
  height: 65%;
  margin-bottom:auto;
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
