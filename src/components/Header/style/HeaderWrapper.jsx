import styled from 'styled-components';

const HeaderWrapper = styled.header`
width: 100%;
background-color: ${({ theme }) => theme.colors.primary.main.color};
display:flex;
align-items: center;
justify-content: space-between;
position: absolute;
z-index: 1;
padding:1rem;
`;
export { HeaderWrapper as default };
