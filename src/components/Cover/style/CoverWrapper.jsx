import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const CoverWrapper = styled.div`
     ${propToStyle('backgroundImage')}
     ${propToStyle('backgroundRepeat')}
     ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundSize')}
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { CoverWrapper as default };
