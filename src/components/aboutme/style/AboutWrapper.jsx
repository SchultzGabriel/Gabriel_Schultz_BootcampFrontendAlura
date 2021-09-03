import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const AboutWrapper = styled.main`
    background-color: ${({ theme }) => theme.colors.primary.main.color};
    height:100%;
    display:flex;
    align-items:center;
    margin-left: 20%;

    ${breakpointsMedia({
    xs: css`
    `,
    md: css`
        margin:0;
    `,
  })}
`;

AboutWrapper.TextArea = styled.div`
    display:flex;
    flex-direction:column;

    width:50%;
${breakpointsMedia({
    xs: css`
    `,
    md: css`
        width:100%;
    `,
  })}
`;

AboutWrapper.RepoList = styled.ul`
display:flex;
flex-flow: column wrap;

ul{
    margin:0;
}
a{
    text-decoration:none;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    text-shadow: 2px 3px 1px black;
    transition: ${({ theme }) => theme.transition};
}
a:hover{
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
}
li{
    margin:10px;
    list-style:none;
}
`;

export { AboutWrapper as default };
