import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const ProjectWrapper = styled.div`
    background: url('https://i.pinimg.com/originals/8d/00/fd/8d00fda1d4a11f3b0980490764a9cb94.jpg') center / cover no-repeat;
    padding:1rem;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    position:relative;
    width:100%;
    min-height:100vh;
    height:100%;
    margin-left: 20%;



    ${breakpointsMedia({
    xs: css`
    `,
    md: css`
    margin:0;
    `,
  })}

    .projects{
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
        width:50%;
        margin-right:auto;

    ${breakpointsMedia({
    xs: css`
    `,
    lg: css`
    /* width:70%; */
    `,
    md: css`
    padding: 1rem;
    margin:0;
    width:100%;

    .projects{
        height:100%;

    }
    `,
  })}
    }
`;

ProjectWrapper.Card = styled.div`
    width:100%;
    margin:1rem;
    transition: ${({ theme }) => theme.transition};
    display:flex;

    :first-child{
        /* background-color:blue; */
    }

    &:hover{
        box-shadow: 0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;;
    }
    
    a{
        text-decoration:none;
        align-items:center;   
        display:flex;
        justify-content:space-around;
        background-color: rgba(0, 0, 0, 0.5)
    }

    .description{
        text-align:justify;
        padding:1rem;
    }

    .card__preview{
        /* width:10%; */
        display:none;
    };

    ${breakpointsMedia({
    xs: css``,
    md: css`
    margin: 0;
    margin-bottom: 1rem;
    width:100%;
    height:100%;

    a{
        flex-direction: column;
        width:100%
    }

    .card__preview{
        display:flex;
        width:100%;
    };
    `,
  })}
`;

ProjectWrapper.Preview = styled.div`

padding:1rem;
display: flex;
align-self: center;
justify-content:center;
width:50%;
transition: ${({ theme }) => theme.transition};

.preview{
        width:100%;
        /* display:none; */
    };

    ${breakpointsMedia({
    xs: css``,
    md: css`
    display:none;
    `,
  })}
`;

export { ProjectWrapper as default };
