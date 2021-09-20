import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const ProjectWrapper = styled.div`
    padding:50px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    position:relative;
    width:100%;
    min-height:100vh;
    height:100%;
    margin-left: 10%;

    ${breakpointsMedia({
    md: css`
    margin:0;
    padding:10px;
    `,
  })}

    .projects{
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
        width:100%;
        height:100%;

    ${breakpointsMedia({
    md: css`
    padding: 1rem;
    margin:0;
    width:100%;
    flex-wrap:nowrap;
    height:100%;
    flex-direction:column;
    `,
  })}
    }
`;

ProjectWrapper.Card = styled.div`
    /* margin:0 50px 30px 0; */
    width:30%;
    height:50%;
    transition: ${({ theme }) => theme.transition};
    position:relative;
    display:flex;

    a{
        text-decoration:none;
        align-items:center;   
        display:inline-flex;
        justify-content:space-around;
        /* background-color: rgba(0, 0, 0, 0.5); */
    }

    .title{
        transition: ${({ theme }) => theme.transition};
        position:absolute;
        top:40%;
        visibility:hidden;
    }

    .description{
        display:none;
    }
    

    .card__preview{
        transition: ${({ theme }) => theme.transition};
        width:100%;
    };

    &:hover{
        .title{
        visibility: visible;
        transition: ${({ theme }) => theme.transition};
    }
    .card__preview{
        opacity:.5;
    };

    }

    ${breakpointsMedia({
    md: css`
    margin: 0;
    margin-bottom: 1rem;
    width:100%;
    height:100%;

    a{
        flex-direction: column;
        width:100%;
        padding:0;
    }

    .title{
        position:static;
        visibility: visible;
    }

    .card__preview{
        display:flex;
        width:100%;
    }
    .description{
        display:flex;
        text-align:justify;
        padding:1rem;
    }
    `,
  })}
`;

export { ProjectWrapper as default };
