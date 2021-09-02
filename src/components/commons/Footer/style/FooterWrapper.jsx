import styled from 'styled-components';

const FooterWrapper = styled.footer`
width:100%;
background-color: ${({ theme }) => theme.colors.primary.main.color};
display:flex;
justify-content: center;
height:120px;
position:relative;
bottom:0;
`;

FooterWrapper.Icons = styled.div`
display:flex;
align-items:center;

a{
    margin:1rem;
}
a:hover{
    transition: ${({ theme }) => theme.transition};
    filter:opacity(.5);
}

img{
    width: 50px;
    filter: invert();
    
}
`;

export { FooterWrapper as default };
