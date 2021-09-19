/* eslint-disable func-names */
import breakpointsMedia from '../breakpointMedia';

function propToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return function (props) {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign: props.textAlign
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.sm) breakpoints.sm = { [propName]: propValue.xs };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };
      if (propValue.lg) breakpoints.lg = { [propName]: propValue.xs };
      if (propValue.xl) breakpoints.xl = { [propName]: propValue.xs };
      if (propValue.fk) breakpoints.fk = { [propName]: propValue.xs };

      return breakpointsMedia(breakpoints);
    }
  };
}

export { propToStyle as default };
