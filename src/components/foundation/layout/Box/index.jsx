import styled, { css } from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexWrap')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('margin')}
  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('right')}
  ${propToStyle('zIndex')}

  ${({ mobile }) => mobile && css`
  display:none;
  ${breakpointMedia({
    md: css`
    display:flex;
    `,
  })}  `};
`;
export { Box as default };
