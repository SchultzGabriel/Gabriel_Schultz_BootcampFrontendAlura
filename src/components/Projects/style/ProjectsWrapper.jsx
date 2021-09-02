import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const ProjectWrapper = styled.div`
    background: url('https://i.pinimg.com/originals/8d/00/fd/8d00fda1d4a11f3b0980490764a9cb94.jpg') center / cover no-repeat;
    padding:1rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    position:relative;
    width:100%;
    height:100%;
    padding-top: 100px;

    ${breakpointsMedia({
    xs: css`
    `,
    md: css`
    `,
  })}

    .projects{
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
        width:50%;
        /* margin-left:auto; */

        ${breakpointsMedia({
    xs: css`
    `,
    lg: css`
    /* width:70%; */
    `,
    md: css`
    padding: 1rem;
    margin:0;
    /* width:100%; */

    .projects{
        height:100%;
    }
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
    /* height:180px; */

    :first-child{
        /* background-color:blue; */
    }

    &:hover{
        /* border: 1px solid green; */
        /* transform: scale(1.01); */
        /* background-color: #333; */
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

    .preview{
        width:20%;
        display:none;
    };
    .description{
        text-align:justify;
        padding:1rem;
    }

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
    .preview{
        width:100%;
    }
    `,
  })}
`;

export { ProjectWrapper as default };
