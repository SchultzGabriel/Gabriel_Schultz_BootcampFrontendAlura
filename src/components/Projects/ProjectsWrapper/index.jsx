import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const ProjectWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height:87vh;

    ${breakpointsMedia({
    xs: css`
    `,
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
        justify-content: space-around;
        align-items: center;

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

    ${breakpointsMedia({
    xs: css``,
    md: css`
    margin: 0;
    margin-bottom: 1rem;
    height:100%;
    `,
  })}

    &:hover{
        border: 1px solid green;
        transform: scale(1.01);
    }
    
    a{
        text-decoration:none;
        align-items:center;   
        display:flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.5)
    }

    .preview{
        width:100%;
    };
    .title{
        display: block;
    }
    .description{
        text-align:justify;
    }
`;

export { ProjectWrapper as default };
