/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

const NavWrapper = styled.nav`
display:flex;
flex-direction: column;
align-items:center;
justify-content: space-around;
/* flex-shrink:0; */
width:100%;
height:50%;

ul{
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  height: 100%;
  width:100%;
  padding:0;
}

li{
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width:100%;
  height:100%;
  list-style:none;
  align-self: flex-start;
  border-top: 1px solid ${({ theme }) => theme.colors.borders.main.color};
}

li:last-child{
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.main.color};
}

a{
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width:100%;
  height:100%;
}
`;

export { NavWrapper as default };
