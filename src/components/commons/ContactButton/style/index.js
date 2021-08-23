import styled from 'styled-components';

const ContButton = styled.button`
position: fixed;
right: 10px;
bottom: 10px;
display:flex;
align-items:center;
border:none;
background-color:black;
border-radius:50px;
z-index:10;
transition: ${({ theme }) => theme.transition};

&&:hover{
  cursor:pointer;
  filter:invert();
}

img{
  width:50px;
  filter:invert();
}
`;

export { ContButton as default };
