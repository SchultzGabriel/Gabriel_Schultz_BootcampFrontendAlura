import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const AboutWrapper = styled.main`
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundSize')}

    background-color: ${({ theme }) => theme.colors.primary.main.color};
    height:100vh;
    display:flex;
    align-items:center;
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

export { AboutWrapper as default };
