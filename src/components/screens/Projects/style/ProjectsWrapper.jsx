import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const ProjectWrapper = styled.div`
    /* background: url('https://i.pinimg.com/originals/8d/00/fd/8d00fda1d4a11f3b0980490764a9cb94.jpg') center / cover no-repeat; */
    padding:1rem;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    position:relative;
    width:100%;
    min-height:100vh;
    height:100%;
    margin-left: 20%;

    ${breakpointsMedia({
    md: css`
    margin:0;
    `,
  })}

    .projects{
        display:flex;
        justify-content: space-around;
        width:100%;

    ${breakpointsMedia({
    md: css`
    padding: 1rem;
    margin:0;
    width:100%;
    height:100%;
    flex-direction:column;
    `,
  })}
    }
`;

ProjectWrapper.Card = styled.div`
    transition: ${({ theme }) => theme.transition};
    display:flex;

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
        background-color: rgba(0, 0, 0, 0.5);
        padding:1rem;
    }

    .description{
        display:none;
    }
    

    .card__preview{
        /* width:10%; */
        display:none;
    };

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

ProjectWrapper.Preview = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
align-self: center;
width:100%;
height:100%;
transition: ${({ theme }) => theme.transition};
margin-bottom:auto;

.link{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
}

.preview{
        height:350px;
        /* width:50%; */
        align-self: center;
    };

    ${breakpointsMedia({
    md: css`
    display:none;
    `,
  })}
`;

export { ProjectWrapper as default };
