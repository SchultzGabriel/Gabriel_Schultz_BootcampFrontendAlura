import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: right;
    /* height:100%; */

    ${breakpointsMedia({
    md: css`
    height: 100%;
    `,
  })};
    ${propToStyle('backgroundImage')}
     ${propToStyle('backgroundRepeat')}
     ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundSize')}

    .projects{
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
        width:50%;
        margin-left:auto;

        ${breakpointsMedia({
    xs: css`
    `,
    md: css`
    flex-direction: column;
    padding: 1rem;
    `,
  })}
    }
`;

ProjectWrapper.Card = styled.div`
    width:100%;
    border-radius: 8px;
    padding:1rem;
    margin:1rem;
    transition: ${({ theme }) => theme.transition};
    display:flex;
    flex-direction:row;
    height:180px;

    ${breakpointsMedia({
    xs: css``,
    md: css`
    margin: 0;
    margin-bottom: 1rem;
    height:100%;
    `,
  })}

    &:hover{
        /* border: 1px solid green; */
        /* transform: scale(1.01); */
    }
    
    a{
        text-decoration:none;
        align-items:center;   
        display:flex;
        background-color: rgba(0, 0, 0, 0.5)
    }

    .preview{
        height:100%;
    };
    .description{
        text-align:justify;
        padding:1rem;
    }
`;

export { ProjectWrapper as default };
